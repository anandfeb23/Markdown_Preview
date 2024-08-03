import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
  gfm: true,
});

function App() {
  const [markdown, setMarkdown] = useState(`
  # Heading 1
  ## Heading 2
  [FreeCodeCamp](https://www.freecodecamp.org)
  Inline \`code\`
  \`\`\`
  Code block
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote
  ![FreeCodeCamp Logo](https://www.freecodecamp.org/logo.svg)
  **Bold text**
  
  This is a line break.
  
  This is after a line break.
  `);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <Editor markdown={markdown} onChange={handleChange} />
      <Preview markdown={markdown} />
    </div>
  );
}

export default App;
