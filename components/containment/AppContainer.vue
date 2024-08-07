<script lang="ts" setup>
defineProps<{
  full?: boolean;
}>();
</script>

<template>
  <div :class="[full ? null : 'max-w-7xl']" class="mx-auto p-4 sm:p-6 lg:p-8">
    <slot />
  </div>
</template>
