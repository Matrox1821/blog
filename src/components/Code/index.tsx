import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage(typescript, "typescript");
SyntaxHighlighter.registerLanguage(tsx, "tsx");

export default function Code({
  children,
  language,
}: {
  children: string | string[];
  language: string;
}) {
  return (
    <article className="w-full mb-4 mt-1">
      <div className="w-full h-11 rounded-t-lg bg-zinc-900 flex justify-start items-center space-x-1.5 px-3">
        <span className="w-3 h-3 rounded-full bg-red-400"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-400"></span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: "0 0 0.5rem 0.5rem",
          marginTop: "0",
        }}>
        {children}
      </SyntaxHighlighter>
    </article>
  );
}
