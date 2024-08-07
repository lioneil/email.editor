export const messages = {
  introduction: `
    <div data-type="draggable-block">
      <p>Drag me below.</p>
    </div>
    <div class="p-4 text-center" data-type="draggable-block">
      <h1>Welcome to our Email Template!</h1>
    </div>
    <p>Create a <strong>personalized</strong> email <em>now</em>! ✉️ 🎉</p>
    <ul>
    <li>Use Markdown syntax to format your text.</li>
    <li>Add links by <code>highlighting</code> then pasting the link.</li>
    <li>Insert images by uploading them or pasting an image URL.</li>
    </ul>
    <p></p>
  `,
  instruction: `
    <h2>How to use:</h2>
    <ol>
    <li>Click on a block to edit it.</li>
    <li>Use the toolbar above to add text, images, links, template, etc.</li>
    <li>Format your text using Markdown syntax.</li>
    </ol>
  `,
};

export const message = Object.values(messages).join('');
