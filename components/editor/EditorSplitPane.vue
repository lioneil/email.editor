<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes';
import EditorEmail from '~/components/editor/EditorEmail.vue';
import MjmlPreviewer from '~/components/mjml/MjmlPreviewer.vue';
import { message } from '~/config/email';

const email = ref(message);
</script>

<template>
  <div class="flex items-center justify-center bg-transparent overflow-hidden">
    <Splitpanes class="min-h-full" v-bind="$attrs">
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="40%">
        <slot name="preview">
          <ClientOnly>
            <MjmlPreviewer :html="email" class="email-content mx-3 my-2 rounded-lg" />
          </ClientOnly>
        </slot>
      </Pane>
      <Pane class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="40%">
        <slot name="editor">
          <EditorEmail v-model="email" class="p-2 rounded-lg" />
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
