import React from "react";

function Editor({ markdown, onChange }) {
  return (
    <div className="editor-container">
      <h2>Editor</h2>
      <textarea
        id="editor"
        rows="10"
        value={markdown}
        onChange={onChange}
      ></textarea>
    </div>
  );
}

export default Editor;
