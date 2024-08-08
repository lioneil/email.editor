<template>
  <NodeViewWrapper class="block__image" tabindex="0">
    <NodeViewContent :style="backgroundStyle" class="content min-h-72" tabindex="0" />
  </NodeViewWrapper>
</template>

<script lang="ts" setup>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3';

const $props = defineProps(nodeViewProps);

const backgroundStyle = ref({});

watchEffect(() => {
  if ($props.node.attrs.src) {
    backgroundStyle.value = {
      backgroundImage: `url(${$props.node.attrs.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px',
    };
  } else {
    backgroundStyle.value = {};
  }
});
</script>

<style lang="postcss">
.block__image {
  @apply relative;
}
</style>
