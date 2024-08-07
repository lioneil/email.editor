<script lang="ts" setup>
defineProps<{
  active?: boolean;
}>();
</script>

<template>
  <button
    :class="{ '!bg-gray-800 text-white dark:text-white dark:!bg-gray-500': active }"
    class="p-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:hover:text-white dark:focus:bg-white/20 dark:focus:text-white"
    type="button"
  >
    <slot />
  </button>
</template>
