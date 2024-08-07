import { mergeAttributes, Node } from '@tiptap/core';
import { VueNodeViewRenderer } from '@tiptap/vue-3';
import DraggableBlock from './Component.vue';

export default Node.create({
  name: 'draggable-block',

  group: 'block',

  content: 'block+',

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="draggable-block"]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-block' }), 0];
  },

  addNodeView() {
    return VueNodeViewRenderer(DraggableBlock);
  },
});
