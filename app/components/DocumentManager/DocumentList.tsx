import { ResearchDocument } from "@/app/components/DocumentManager/DocumentManager";
import EditDocumentForm from "@/app/components/DocumentManager/EditDocumentForm";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  documents: ResearchDocument[];
  editDocument: (
    document: ResearchDocument,
    title: string,
    content: string
  ) => void;
  deleteDocument: (document: ResearchDocument) => void;
}

const DocumentList = (props: Props) => {
  const { documents, editDocument, deleteDocument } = props;
  const [editingDocument, setEditingDocument] =
    useState<ResearchDocument | null>(null);

  const header = (
    <h3 className="font-bold text-2xl text-center tracking-tight">
      Document List
    </h3>
  );

  if (documents.length > 0) {
    return (
      <>
        {header}
        <div className="border-gray-200 border-t border-x mt-8 shadow-md sm:max-w-xl sm:mx-auto w-full">
          {documents.map((document) => (
            <div
              key={document.id}
              className="border-b border-gray-200 flex items-center p-4"
            >
              <div className="font-light ml-3 text-gray-200 text-xl">
                {document.data.title}
              </div>
              {/* Edit Document */}
              <div className="ml-2">
                <div
                  onClick={() => setEditingDocument(document)}
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faPencilAlt}
                    className="h-8  w-8 text-primary hover:text-secondary"
                  />
                </div>
              </div>
              {/* Delete Document */}
              <div className="ml-auto">
                <div
                  onClick={() => deleteDocument(document)}
                  className="cursor-pointer"
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="h-8 w-8 text-primary hover:text-secondary"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 shadow-md">
          {editingDocument && (
            <EditDocumentForm
              document={editingDocument}
              onSave={(title: string, content: string) => {
                editDocument(editingDocument, title, content);
                setEditingDocument(null);
              }}
            />
          )}
        </div>
      </>
    );
  } else {
    return (
      <>
        {header}
        <p className="mt-8">No documents yet. Go ahead and create one!</p>
      </>
    );
  }
};

export default DocumentList;
