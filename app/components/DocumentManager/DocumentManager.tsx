import AddDocumentForm from "@/app/components/DocumentManager/AddDocumentForm";
import DocumentList from "@/app/components/DocumentManager/DocumentList";
import Records from "@/app/components/DocumentManager/Records";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { Web5 } from "@tbd54566975/web5";
import { useEffect, useState } from "react";

export type ResearchDocument = {
  record: any;
  data: {
    content: string;
    title: string;
  };
  id: string;
};

const DocumentManager = () => {
  const [web5, setWeb5] = useState<any>(null);
  const [myDid, setMyDid] = useState<string>("");
  const [documents, setDocuments] = useState<ResearchDocument[]>([]);
  const [newDocumentTitle, setNewDocumentTitle] = useState<string>("");
  const [newDocumentContent, setNewDocumentContent] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { web5: web5Instance, did } = await Web5.connect();
      setWeb5(web5Instance);
      setMyDid(did);

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
        const loadedDocuments = queryResult.records.map(async (record) => {
          const data = await record.data.json();
          return { record, data, id: record.id };
        });

        Promise.all(loadedDocuments).then((loadedDocs) => {
          setDocuments(loadedDocs);
        });
      } else {
        setError(true);
      }
    })();
  }, []); // Empty dependency array to run once

  const addDocument = async () => {
    const documentData = {
      title: newDocumentTitle,
      content: newDocumentContent
    };

    setNewDocumentTitle("");
    setNewDocumentContent("");

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

  return (
    <div className="flex flex-col items-center justify-center min-h-full px-8 py-12 sm:px-6">
      {/* Title */}
      <div className="mb-16">
        <h2 className="font-bold text-3xl text-center tracking-tight">
          Manage your research documents
        </h2>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Add Document Form */}
          <div className="sm:col-span-1">
            <h3 className="font-bold text-2xl text-center tracking-tight">
              Add a new document
            </h3>
            <AddDocumentForm
              addDocument={addDocument}
              newDocumentContent={newDocumentContent}
              newDocumentTitle={newDocumentTitle}
              setNewDocumentContent={setNewDocumentContent}
              setNewDocumentTitle={setNewDocumentTitle}
            />
          </div>
          {/* Documents */}
          <div className="sm:col-span-1">
            <h3 className="font-bold text-2xl text-center tracking-tight">
              Document List
            </h3>
            <DocumentList
              documents={documents}
              deleteDocument={deleteDocument}
              editDocument={editDocument}
            />
          </div>
          {/* Records */}
          <Records documents={documents} />
        </div>
      )}
      {error ? <p className="text-red-500">Error loading documents.</p> : null}
    </div>
  );
};

export default DocumentManager;
