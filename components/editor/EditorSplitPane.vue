<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes';
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-white rounded-lg overflow-hidden">
    <Splitpanes class="default-theme h-full" v-bind="$attrs">
      <Pane class="shadow-inner" min-size="40%">
        <slot name="editor"></slot>
      </Pane>
      <Pane class="shadow-inner" min-size="30%">
        <slot name="preview"></slot>
      </Pane>
    </Splitpanes>
  </div>
</template>
