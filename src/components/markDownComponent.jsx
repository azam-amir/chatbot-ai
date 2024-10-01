import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, value }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "4px",
        padding: "10px",
        margin: "10px 0",
      }}
    >
      <SyntaxHighlighter language={language} style={dracula}>
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

const MarkdownRenderer = ({ answerData }) => {
  return (
    <div style={{ textAlign: "left" }}>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <CodeBlock
                language={match[1]}
                value={String(children).replace(/\n$/, "")}
              />
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {answerData}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
