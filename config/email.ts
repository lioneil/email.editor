export const messages = {
  introduction: `
    <img src="/favicon.ico" alt="App Logo">
    <div data-type="draggable-block">
      <p>To following is a quote:</p>
      <blockquote><p>Drag me below.</p><cite>- Anonymous</cite></blockquote>
    </div>
    <div data-type="draggable-block">
      <h1>Welcome to Email Editor!</h1>
    </div>
    <p>Dear [NAME],</p>
    <p>Create a <strong>personalized</strong> email <em>now</em>! ✉️ 🎉</p>
    <p>Today we will create a responsive email template.</p>
    <ul>
    <li>📥 Use Markdown syntax to format your <span style="color: #41a300;">colored text</span>.</li>
    <li>🔗 Add <a href="http://localhost:3000">links</a> by <code>highlighting</code> then pasting the link.</li>
    <li>🖼️ Insert images by uploading them or pasting an image URL.</li>
    </ul>
    `,
  instruction: `
    <h2>How to use:</h2>
    <ol>
    <li>Click on a block to edit it.</li>
    <li>Use the toolbar above to add text, images, links, template, etc.</li>
    <li>Format your text using Markdown syntax.</li>
    </ol>
  `,
  misc: `
    <h2>Deliverables</h2>
    <ul>
    <li>🚀 A fully functional Nuxt/Vue project.</li>
    <li>📖 A detailed README file explaining the setup and usage of the project.</li>
    <li>✨ Ensure the project is well-documented and follows best practices for code quality and structure.</li>
    </ul>
  `,
};

export const message = Object.values(messages).join('');
