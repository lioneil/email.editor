<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes';
</script>

<template>
  <div class="flex items-center justify-center bg-transparent rounded-lg overflow-hidden">
    <Splitpanes class="h-full" v-bind="$attrs">
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-600" min-size="40%">
        <slot name="editor"></slot>
      </Pane>
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-600" min-size="30%">
        <slot name="preview"></slot>
      </Pane>
    </Splitpanes>
  </div>
</template>

<style lang="postcss">
.splitpanes--vertical > .splitpanes__splitter {
  @apply w-[7px] bg-white border-s border-gray-100 dark:bg-gray-900 dark:border-neutral-600 -ms-1;
}
</style>
