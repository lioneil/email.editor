<script lang="ts" setup>
import { EditorContent, useEditor } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { message } from '~/config/email';

const $emit = defineEmits(['update:modelValue']);

const model = defineModel<string>({ default: message });
const editor = useEditor({
  content: model.value,
  autofocus: true,
  injectCSS: true,
  extensions: [StarterKit],
  editorProps: {
    attributes: {
      class: 'prose prose-slate min-w-full m-0 mx-auto',
    },
  },
});
</script>

<template>
  <div class="editor email-content flex flex-col gap-1 h-full min-h-8">
    <ClientOnly>
      <EditorContent :editor="editor" class="flex-grow" />
    </ClientOnly>
  </div>
</template>
