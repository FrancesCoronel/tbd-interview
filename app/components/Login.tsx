import ErrorMessage from "@/app/components/ErrorMessage";
import {
  faCheckCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  error: Error | null;
  setAuthenticated: (authenticated: boolean) => void;
}

const Login = (props: Props) => {
  // Hypothetically, we could implement authentication logic here, e.g., verify DID against a database
  // But because this is just a proof of concept, we'll just let folks click a button to mock a successful or failed login
  const { error, setAuthenticated } = props;

  const [showError, setShowError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-bold text-3xl text-center tracking-tight">Login</h2>
      {showError && (
        <div className="mt-8 mb-8">
          <ErrorMessage error={error} />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8 justify-center">
        <div className="sm:col-span-1">
          <button
            className="bg-secondary hover:bg-primary text-black font-bold py-2 px-4 inline-flex items-center"
            onClick={() => setAuthenticated(true)}
          >
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="h-5 w-5 mr-3"
              aria-hidden="true"
            />
            Mock successful login
          </button>
        </div>
        <div className="sm:col-span-1">
          <button
            className="bg-secondary hover:bg-primary text-black font-bold py-2 px-4 inline-flex items-center"
            onClick={() => setShowError(true)}
          >
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className="h-5 w-5 mr-3"
              aria-hidden="true"
            />
            Mock failed login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
