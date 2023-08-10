import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorMessage = ({ error }: { error: null | Error }) => {
  if (error !== null) {
    return (
      <div className="text-primary inline-flex items-center">
        <FontAwesomeIcon
          icon={faExclamationTriangle}
          className="h-5 w-5 mr-3"
          aria-hidden="true"
        />
        {error?.message}
      </div>
    );
  }
  return null;
};

export default ErrorMessage;
