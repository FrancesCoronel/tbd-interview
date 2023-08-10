import { ResearchDocument } from "@/app/hooks/useDocuments";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Use an appropriate icon for saving changes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface EditDocumentFormProps {
  document: ResearchDocument;
  onSave: (title: string, content: string) => void;
}

const EditDocumentForm = (props: EditDocumentFormProps) => {
  const { document, onSave } = props;

  const [editedTitle, setEditedTitle] = React.useState<string>(
    document.data.title
  );
  const [editedContent, setEditedContent] = React.useState<string>(
    document.data.content
  );

  return (
    <div className="mt-8">
      <form className="flex flex-col space-y-4">
        {/* add header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Edit Document</h2>
        </div>

        <div className="border-b border-gray-200 w-full">
          <label htmlFor="edit-title">Title</label>
          <input
            name="edit-title"
            id="edit-title"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black mt-2 w-full"
            placeholder="Title"
          />
        </div>
        <div className="border-b border-gray-200 w-full">
          <label htmlFor="edit-content">Content</label>
          <textarea
            rows={4}
            name="edit-content"
            id="edit-content"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black mt-2 w-full"
            placeholder="Content"
          />
        </div>
        <button
          type="button"
          onClick={() => onSave(editedTitle, editedContent)} // Handle the edit/save action here
          className="bg-secondary border border-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 hover:bg-primary inline-flex items-center p-2 shadow-sm text-black"
        >
          <FontAwesomeIcon
            icon={faCheck}
            className="h-5 w-5 mr-3"
            aria-hidden="true"
          />
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditDocumentForm;
