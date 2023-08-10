import { Web5 } from "@tbd54566975/web5";
import { useEffect, useState } from "react";

export type ResearchDocument = {
  record: any;
  data: {
    title: string;
    content: string;
  };
  id: string;
};

const useDocuments = (isAuthenticated: boolean) => {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<string>("");

  const [documents, setDocuments] = useState<ResearchDocument[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    // Async IIFE for this useEffect
    (async () => {
      // Connect to Web5
      const { web5: web5Instance, did } = await Web5.connect();
      setWeb5(web5Instance);
      setMyDid(did);

      // Authenticate the user using the DID
      if (!isAuthenticated) {
        setError(new Error("User is not authenticated"));
        return; // Exit if authentication fails
      } else {
        setError(null);
      }

      // Populate documents from DWN
      const queryResult = await web5Instance.dwn.records.query({
        message: {
          filter: {
            schema: "https://schema.org/DigitalDocument"
          }
        }
      });

      // Check if records are defined
      if (queryResult.records) {
        // Records are loaded
        setLoading(false);
        // Add entry to Document array
        const loadedDocuments = queryResult.records.map(
          async (record: { data: { json: () => any }; id: any }) => {
            const data = await record.data.json();
            return { record, data, id: record.id };
          }
        );

        Promise.all(loadedDocuments).then((loadedDocs) => {
          setDocuments(loadedDocs);
        });
      }
    })();
  }, [isAuthenticated]); // Empty dependency array to run once

  /**
   * Add a document
   * @param documentData
   */
  const addDocument = async (documentData: {
    title: string;
    content: string;
  }) => {
    // Create the record.
    const { record } = await web5.dwn.records.create({
      data: documentData,
      message: {
        schema: "https://schema.org/DigitalDocument",
        dataFormat: "application/json"
      }
    });

    const data = await record.data.json();
    const document = { record, data, id: record.id };
    setDocuments((prevDocuments) => [...prevDocuments, document]);
  };

  /**
   * Delete a document
   * @param documentItem
   */
  const deleteDocument = async (documentItem: ResearchDocument) => {
    const index = documents.findIndex(
      (document) => document.id === documentItem.id
    );
    const deletedDocument = documents[index];

    setDocuments((prevDocuments) =>
      prevDocuments.filter((_, i) => i !== index)
    );

    // Delete the record.
    await web5.dwn.records.delete({
      message: {
        recordId: deletedDocument.id
      }
    });
  };

  /**
   * Edit a document
   * @param documentItem
   * @param updatedTitle
   * @param updatedContent
   */
  const editDocument = async (
    documentItem: ResearchDocument,
    updatedTitle: string,
    updatedContent: string
  ) => {
    const index = documents.findIndex(
      (document) => document.id === documentItem.id
    );
    const updatedDocumentData = {
      title: updatedTitle,
      content: updatedContent
    };

    // Read the record
    const { record } = await web5.dwn.records.read({
      message: {
        recordId: documentItem.id
      }
    });

    // Update the record
    await record.update({ data: updatedDocumentData });

    setDocuments((prevDocuments) => [
      ...prevDocuments.slice(0, index),
      { ...documentItem, data: updatedDocumentData },
      ...prevDocuments.slice(index + 1)
    ]);
  };

  return {
    myDid,

    state: {
      loading,
      error
    },

    documents: {
      all: documents,
      add: addDocument,
      edit: editDocument,
      delete: deleteDocument
    }
  };
};

export { useDocuments };
