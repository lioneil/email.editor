<script lang="ts" setup>
import AppActivitybar from '~/components/containment/AppActivitybar.vue';
import BlockImage from '~/components/editor/extensions/BlockImage';
import DraggableBlock from '~/components/editor/extensions/DraggableBlock';
import StarterKit from '@tiptap/starter-kit';
import type { ShallowRef } from 'vue';
import { Image } from '@tiptap/extension-image';
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { type Editor, EditorContent, useEditor } from '@tiptap/vue-3';

const $emit = defineEmits(['update:modelValue']);

const model = defineModel<string>({ default: '' });
const editor: ShallowRef<Editor | undefined> = useEditor({
  content: model.value,
  autofocus: true,
  injectCSS: true,
  extensions: [
    StarterKit,
    DraggableBlock,
    BlockImage,
    Underline,
    Image,
    Link.configure({
      openOnClick: false,
      defaultProtocol: 'https',
    }),
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-slate min-w-full m-0 mx-auto focus:outline-none',
    },
  },
  onUpdate: () => {
    $emit('update:modelValue', editor.value?.getHTML());
  },
});

onMounted(() => {
  $emit('update:modelValue', editor.value?.getHTML());
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>

<template>
  <div class="editor email-content flex gap-2 min-h-full">
    <ClientOnly>
      <EditorContent v-if="editor" :editor="editor" class="grow shadow-lg mr-24" />
      <template #fallback>
        <div class="w-full flex-grow bg-white rounded-lg mr-24"></div>
      </template>
    </ClientOnly>
    <AppActivitybar class="rounded-lg shadow-lg gap-2 mr-2 h-auto fixed right-2">
      <EditorToolbar :editor="editor" />
    </AppActivitybar>
  </div>
</template>
