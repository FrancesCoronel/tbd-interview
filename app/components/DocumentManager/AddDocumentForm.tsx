import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  addDocument: () => void;
  newDocumentContent: string;
  setNewDocumentContent: (content: string) => void;
  newDocumentTitle: string;
  setNewDocumentTitle: (title: string) => void;
}

const AddDocumentForm = (props: Props) => {
  const {
    newDocumentTitle,
    setNewDocumentTitle,
    newDocumentContent,
    setNewDocumentContent,
    addDocument
  } = props;
  return (
    <div className="mt-8">
      <form
        className="flex flex-col space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          addDocument();
        }}
      >
        <div className="border-b border-gray-200 sm:w-full">
          <label htmlFor="add-title" className="sr-only">
            Title
          </label>
          <input
            name="add-title"
            id="add-title"
            value={newDocumentTitle}
            onChange={(e) => setNewDocumentTitle(e.target.value)}
            className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black"
            placeholder="Title"
          />
        </div>
        <div className="border-b border-gray-200 sm:w-full">
          <label htmlFor="add-content" className="sr-only">
            Content
          </label>
          <textarea
            rows={4}
            name="add-content"
            id="add-content"
            value={newDocumentContent}
            onChange={(e) => setNewDocumentContent(e.target.value)}
            className="block border-0 border-transparent focus:ring-0 p-2 resize-none sm:text-sm text-black"
            placeholder="Content"
          />
        </div>
        <button
          type="submit"
          className="bg-primary border border-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-secondary inline-flex items-center p-2 shadow-sm text-black"
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
  );
};

export default AddDocumentForm;
