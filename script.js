document.addEventListener("DOMContentLoaded", () => {
  // Set marked options
  marked.setOptions({
    breaks: true, // Enables line breaks
    gfm: true, // Enables GitHub Flavored Markdown
  });

  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");

  const initialMarkdown = `
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
    `;

  // Initialize editor with default content
  editor.value = initialMarkdown;
  preview.innerHTML = marked(editor.value);

  // Update preview on every keyup
  editor.addEventListener("keyup", () => {
    preview.innerHTML = marked(editor.value);
  });
});
