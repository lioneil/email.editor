<script lang="ts" setup>
const mjml2html = (await import('mjml-browser')).default;

const $props = defineProps<{
  html: string;
}>();

const styles = `
html, body {
  font-size: 16px;
}
`;
const template = computed(() => {
  return `
  <mjml>
    <mj-head>
      <style>${styles}</style>
    </mj-head>
    <mj-body>
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
      beautify: true,
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
    <div class="mx-2">
      <div
        class="email-content prose prose-2xl prose-slate !w-full m-0 mx-auto h-auto shadow-xl focus:outline-none bg-white relative overflow-visible"
        v-bind="$attrs"
      >
        <span
          class="absolute -top-1 -left-1 rounded px-2 py-1 font-bold border-2 border-gray-300 text-sm select-none text-gray-600 bg-gray-200 dark:bg-gray-800 dark:border-gray-900 dark:text-gray-400"
        >
          {{ $t('Preview') }}
        </span>
        <iframe :srcdoc="html" class="w-full min-h-[80vh] border-none"></iframe>
      </div>
    </div>
  </ClientOnly>
</template>
