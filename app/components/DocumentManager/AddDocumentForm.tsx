import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  addDocument: ({ title, content }: { title: string; content: string }) => void;
}

const AddDocumentForm = (props: Props) => {
  const { addDocument } = props;

  const [newDocumentTitle, setNewDocumentTitle] = useState("");
  const [newDocumentContent, setNewDocumentContent] = useState("");

  return (
    <>
      <h3 className="font-bold text-2xl text-center tracking-tight">
        Add a new document
      </h3>{" "}
      <div className="mt-8">
        <form
          className="flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            addDocument({
              title: newDocumentTitle,
              content: newDocumentContent
            });
          }}
        >
          <div className="border-b border-gray-200 w-full">
            <label htmlFor="add-title" className="sr-only">
              Title
            </label>
            <input
              name="add-title"
              id="add-title"
              value={newDocumentTitle}
              onChange={(e) => setNewDocumentTitle(e.target.value)}
              className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black w-full"
              placeholder="Title"
            />
          </div>
          <div className="border-b border-gray-200 w-full">
            <label htmlFor="add-content" className="sr-only">
              Content
            </label>
            <textarea
              rows={4}
              name="add-content"
              id="add-content"
              value={newDocumentContent}
              onChange={(e) => setNewDocumentContent(e.target.value)}
              className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black w-full"
              placeholder="Content"
            />
          </div>
          <button
            type="submit"
            className="bg-secondary border border-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 hover:bg-primary inline-flex items-center p-2 shadow-sm text-black"
          >
            <FontAwesomeIcon
              icon={faPlus}
              className="h-5 w-5 mr-3"
              aria-hidden="true"
            />
            Add Document
          </button>
        </form>
      </div>
    </>
  );
};

export default AddDocumentForm;
