<script lang="ts" setup>
import { Pane, Splitpanes } from 'splitpanes';
import EditorEmail from '~/components/editor/EditorEmail.vue';
import MjmlPreviewer from '~/components/mjml/MjmlPreviewer.vue';
import { message } from '~/config/email';
import { type Editor } from '@tiptap/core';

const email = ref(message);
const preview = ref();

const sizes = reactive({
  preview: 25,
  editor: 40,
});

function onModeUpdate(mode: 'desktop' | 'mobile') {
  sizes.editor = mode === 'mobile' ? 75 : 50;
  sizes.preview = mode === 'mobile' ? 25 : 50;
}

function onEditorUpdate(editor: Editor) {
  preview.value = editor.getJSON();
}
</script>

<template>
  <div class="flex items-center justify-center bg-transparent overflow-hidden">
    <Splitpanes class="min-h-full" v-bind="$attrs">
      <Pane :size="sizes.preview" class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="25%">
        <slot name="preview">
          <ClientOnly>
            <MjmlPreviewer
              :html="email"
              :json="preview"
              class="mx-3 my-2 rounded-lg"
              @update:mode="onModeUpdate"
            />
          </ClientOnly>
        </slot>
      </Pane>
      <Pane :size="sizes.editor" class="shadow-inner bg-gray-100 dark:bg-gray-800" min-size="40%">
        <slot name="editor">
          <EditorEmail v-model="email" class="p-2 rounded-lg" @update:editor="onEditorUpdate" />
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
