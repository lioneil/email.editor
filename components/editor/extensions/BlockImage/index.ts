import { mergeAttributes, Node } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import BlockImage from './Component.vue';

export default Node.create({
  name: 'backgroundImage',

  group: 'block',

  content: 'block*',

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="background-image"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'background-image' }), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(BlockImage);
  },
});
