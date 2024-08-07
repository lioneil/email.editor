<template>
  <div
    v-cloak
    id="app"
    class="w-screen min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 dark:text-gray-400"
    data-component="window"
  >
    <slot />
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
