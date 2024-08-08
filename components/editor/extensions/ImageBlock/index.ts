import { mergeAttributes, Node, type NodeViewProps } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import ImageBlock from './Component.vue';

export default Node.create({
  name: 'image-block',

  group: 'block',

  content: 'block*',

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (element) => element.getAttribute('data-src'),
        renderHTML: (attributes) => {
          return {
            'data-src': attributes.src,
            'style': `background-image: url(${attributes.src}); background-size: cover; background-position: center; padding: 20px; min-height: 252px;`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="image-block"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'image-block' }), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(ImageBlock);
  },

  toMjml({ node }: { node: NodeViewProps['node'] }) {
    const src = node.attrs.src ? node.attrs.src : '';
    return `
      <mj-section>
        <mj-column>
          <mj-image src="${src}" />
        </mj-column>
      </mj-section>
    `;
  },
});
