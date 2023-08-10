import { ResearchDocument } from "@/app/hooks/useDocuments";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  documents: ResearchDocument[];
}

const Records = (props: Props) => {
  const { documents } = props;
  if (documents.length > 0) {
    return (
      <div className="col-span-2 mt-16">
        <h2 className="font-bold text-3xl text-center tracking-tight">
          View the records ({documents.length})
        </h2>
        <div className="mt-8">
          <SyntaxHighlighter
            language="json"
            style={a11yDark}
            wrapLongLines={true}
            // add break word to style
            customStyle={{ wordBreak: "break-word" }}
          >
            {JSON.stringify(documents, null, 2)}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
};

export default Records;
