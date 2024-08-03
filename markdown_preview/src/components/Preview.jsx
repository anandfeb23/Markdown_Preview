import React from "react";
import { marked } from "marked";

function Preview({ markdown }) {
  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
  );
}

export default Preview;
