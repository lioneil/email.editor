<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes';
import EditorEmail from '~/components/editor/EditorEmail.vue';
</script>

<template>
  <div class="flex items-center justify-center bg-transparent overflow-hidden">
    <Splitpanes class="min-h-full" v-bind="$attrs">
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="40%">
        <slot name="preview"></slot>
      </Pane>
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="40%">
        <slot name="editor">
          <EditorEmail class="p-2 rounded-lg" />
        </slot>
      </Pane>
    </Splitpanes>
  </div>
</template>

<style lang="postcss">
/*noinspection CssUnusedSymbol*/
.splitpanes--vertical > .splitpanes__splitter {
  @apply w-[7px] bg-white border-s border-gray-100 dark:bg-gray-900 dark:border-neutral-600 -ms-1;
}
</style>
