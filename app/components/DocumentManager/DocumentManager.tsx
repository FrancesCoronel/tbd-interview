import AddDocumentForm from "@/app/components/DocumentManager/AddDocumentForm";
import DocumentList from "@/app/components/DocumentManager/DocumentList";
import Records from "@/app/components/DocumentManager/Records";
import ErrorMessage from "@/app/components/ErrorMessage";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Login from "@/app/components/Login";
import { useDocuments } from "@/app/hooks/useDocuments";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DocumentManager = () => {
  // Mock authentication
  const [authenticated, setAuthenticated] = useState(false);

  // Load documents, state and DID
  const { documents, state, myDid } = useDocuments(authenticated);

  // Show login if not authenticated
  if (authenticated === false) {
    return (
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        <Login setAuthenticated={setAuthenticated} error={state.error} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center mt-8 mb-8">
        {/* Title */}
        <div className="mb-16">
          <p className="text-center">
            Welcome <span className="text-primary">{myDid.slice(0, 30)}</span>
            ...
          </p>
          <h2 className="font-bold text-3xl text-center tracking-tight mt-8">
            Manage your research documents
          </h2>
        </div>

        {state.loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Add Document Form */}
            <div className="sm:col-span-1">
              <AddDocumentForm addDocument={documents.add} />
            </div>

            {/* Documents */}
            <div className="sm:col-span-1">
              <DocumentList
                documents={documents.all}
                deleteDocument={documents.delete}
                editDocument={documents.edit}
              />
            </div>

            {/* Records */}
            <Records documents={documents.all} />
          </div>
        )}
      </div>
    );
  }
};

export default DocumentManager;
