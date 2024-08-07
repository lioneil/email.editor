<script lang="ts" setup>
import AppWindow from '~/components/containment/AppWindow.vue';
import AppWorkspace from '~/components/containment/AppWorkspace.vue';
</script>

<template>
  <AppWindow>
    <AppWorkspace>
      <slot />
    </AppWorkspace>
  </AppWindow>
</template>
