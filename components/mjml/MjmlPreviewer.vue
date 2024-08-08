<script lang="ts" setup>
import BaseButton from '~/components/buttons/BaseButton.vue';
import { MonitorIcon, SmartphoneIcon } from 'lucide-vue-next';
import { type NodeViewProps } from '@tiptap/core';

const mjml2html = (await import('mjml-browser')).default;

const $emit = defineEmits(['update:mode']);

const $props = defineProps<{
  json: { content: NodeViewProps['node'][] };
  html: string;
}>();

const mode = ref<'desktop' | 'mobile'>('desktop');

function setMode(code: 'desktop' | 'mobile') {
  mode.value = code;
  $emit('update:mode', mode.value);
}

const styles = `
.email-content {
  font-size: 14px;
  color: rgb(51, 65, 85);
}
.email-content p {
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 18px;
  line-height: 24.5px;
  color: rgb(51, 65, 85);
}
.email-content img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
.email-content img.image {
  width: auto !important;
}
.email-content blockquote {
  font-weight: 500;
  font-style: italic;
  border-inline-start-width: 0.25rem;
  border-inline-start-color: #e2e8f0;
  quotes: "\\201C" "\\201D" "\\2018" "\\2019";
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  padding-inline-start: 1em;
}
`;

const template = computed(() => {
  return `
  <mjml>
    <mj-head>
      <mj-style>${styles}</mj-style>
    </mj-head>
    <mj-body css-class="email-content">
      <mj-section>
        <mj-column>
          <mj-text>
            ${$props.html || ''}
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`;
});

const html = ref();
onMounted(() => {
  watchEffect(() => {
    const result = mjml2html(template.value, {
      minify: false,
    });
    html.value = result.html;
  });
});
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <ClientOnly>
    <div class="mx-3 my-2 min-h-full">
      <div
        class="email-content prose prose-2xl prose-slate m-0 !min-w-full mx-auto shadow-xl transition-all duration-300 focus:outline-none bg-white relative overflow-visible"
        style="min-height: calc(90vh + 14px)"
        v-bind="$attrs"
      >
        <span
          class="absolute -top-1 -left-1 rounded px-2 py-1 font-bold border-2 border-gray-300 text-sm select-none text-gray-600 bg-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-400"
        >
          {{ $t('Preview') }}
        </span>
        <div class="flex w-full self-center p-2 justify-center mx-auto">
          <BaseButton
            :class="{
              active: mode === 'mobile',
            }"
            class="btn-mode rounded-e-none hover:text-gray-800 dark:text-gray-900 dark:hover:text-gray-900"
            @click="setMode('mobile')"
          >
            <SmartphoneIcon class="size-4" />
            <span>{{ $t('Mobile') }}</span>
          </BaseButton>
          <BaseButton
            :class="{
              active: mode === 'desktop',
            }"
            class="btn-mode rounded-s-none hover:text-gray-800 dark:text-gray-900 dark:hover:text-gray-900"
            @click="setMode('desktop')"
          >
            <MonitorIcon class="size-4" />
            <span>{{ $t('Desktop') }}</span>
          </BaseButton>
        </div>
        <!--        <div class="w-full h-full min-h-[80vh]" v-html="html"></div>-->
        <iframe :srcdoc="html" class="w-full min-h-[80vh] h-auto border-none"></iframe>
      </div>
    </div>
  </ClientOnly>
</template>

<style lang="postcss">
@tailwind components;

.btn-mode.active {
  @apply bg-black/80 text-white hover:bg-black/70 hover:text-white focus:bg-black/70 focus:text-white;
}
</style>
