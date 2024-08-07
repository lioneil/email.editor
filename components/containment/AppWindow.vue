<template>
  <div v-cloak id="app" class="w-screen min-h-screen overflow-x-hidden" data-component="window">
    <slot />
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
