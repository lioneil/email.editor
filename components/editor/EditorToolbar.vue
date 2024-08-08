<script lang="ts" setup>
import type { Editor } from '@tiptap/core';
import ButtonBold from '~/components/editor/controls/ButtonBold.vue';
import ButtonItalic from '~/components/editor/controls/ButtonItalic.vue';
import ButtonUnderline from '~/components/editor/controls/ButtonUnderline.vue';
import ButtonImage from '~/components/editor/controls/ButtonImage.vue';
import ButtonDraggable from '~/components/editor/controls/ButtonDraggable.vue';
import ButtonStrike from '~/components/editor/controls/ButtonStrike.vue';
import ButtonBlockquote from '~/components/editor/controls/ButtonBlockquote.vue';
import ButtonLink from '~/components/editor/controls/ButtonLink.vue';
import ButtonImageBlock from '~/components/editor/controls/ButtonImageBlock.vue';

defineProps<{
  editor?: Editor;
}>();
</script>

<template>
  <ClientOnly>
    <div v-if="editor" class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <ButtonBold
          :active="editor.isActive('bold')"
          @click="editor.chain().focus().toggleBold().run()"
        />
        <ButtonItalic
          :active="editor.isActive('italic')"
          @click="editor.chain().focus().toggleItalic().run()"
        />
        <ButtonUnderline
          :active="editor.isActive('underline')"
          @click="editor.chain().focus().toggleUnderline().run()"
        />
        <ButtonStrike
          :active="editor.isActive('strike')"
          @click="editor.chain().focus().toggleStrike().run()"
        />
      </div>

      <div class="flex flex-col gap-1">
        <ButtonBlockquote
          :active="editor.isActive('blockquote')"
          @click="editor.chain().focus().toggleBlockquote().run()"
        />
        <ButtonLink
          :active="editor.isActive('link')"
          @update:link="(text) => editor?.chain().focus().setLink({ href: text }).run()"
        />
      </div>

      <div class="flex flex-col gap-1">
        <ButtonImage
          :active="editor.isActive('image')"
          @click="(image) => editor?.chain().focus().setImage({ src: image }).run()"
        />
        <ButtonImageBlock
          :active="editor.isActive('image-block')"
          @click="(content) => editor?.chain().focus().insertContent(content).run()"
        />
        <ButtonDraggable
          :active="editor.isActive('draggable-block')"
          @click="(content) => editor?.chain().focus().insertContent(content).run()"
        />
      </div>
    </div>
    <template #fallback>
      <div class="w-full min-h-[380px]"></div>
    </template>
  </ClientOnly>
</template>
