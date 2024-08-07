<template>
  <NodeViewWrapper class="block__image" tabindex="0">
    <NodeViewContent class="content" tabindex="0" />
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';

defineProps(nodeViewProps);
</script>

<style lang="postcss">
.block__image {
  @apply relative;
}
</style>
