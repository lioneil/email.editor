<script lang="ts" setup>
defineProps<{
  full?: boolean;
}>();
</script>

<template>
  <div :class="[full ? 'min-w-full w-full' : 'max-w-7xl']" class="mx-auto p-4">
    <slot />
  </div>
</template>
