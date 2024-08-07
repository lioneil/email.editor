<template>
  <div class="bg-white dark:bg-gray-900 dark:text-gray-400">
    <div class="flex p-2 overflow-x-auto" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
