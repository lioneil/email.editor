<script lang="ts" setup>
import { ImageUpIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import { toBase64 } from '~/utils/toBase64';
import AppTooltip from '~/components/feedback/AppTooltip.vue';
import { useI18n } from 'vue-i18n';

const $emit = defineEmits(['click']);

const { t } = useI18n();

const file = ref();

function openFileExplorer() {
  file.value.click();
}

async function onFileSelected(e: Event) {
  const target = e.target as HTMLInputElement;
  const image = await toBase64(target.files?.[0]);

  $emit('click', {
    type: 'image-block',
    attrs: {
      src: image,
    },
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: t('Write something in this area'),
          },
        ],
      },
    ],
  });
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator>
      <BaseButton class="w-10 h-10" type="button" v-bind="$attrs" @click.stop="openFileExplorer">
        <ImageUpIcon class="size-4 mx-auto" />
      </BaseButton>
    </template>
    {{ $t('Background image') }}
  </AppTooltip>
  <input ref="file" class="invisible hidden" type="file" @change="onFileSelected" />
</template>
