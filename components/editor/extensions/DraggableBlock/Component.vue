<template>
  <NodeViewWrapper class="draggable-block">
    <div class="drag-handle" contenteditable="false" data-drag-handle draggable="true" />
    <NodeViewContent class="content min-h-10" tabindex="0" />
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';

defineProps(nodeViewProps);
</script>

<style lang="postcss">
.draggable-block {
  @apply flex items-start bg-white -mx-2 rounded-lg focus:outline-1 border-2 border-transparent hover:border-gray-200;

  .drag-handle {
    @apply relative flex top-0.5 px-2 m-1 cursor-grab;
    width: 1rem;
    height: 1rem;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><path fill-opacity="0.2" d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .content {
    flex: 1 1 auto;
  }
}
</style>
