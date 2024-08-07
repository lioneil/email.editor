<script lang="ts" setup>
import { GripVerticalIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';
import { useI18n } from 'vue-i18n';

const $emit = defineEmits(['click']);

const { t } = useI18n();

function onClick() {
  $emit('click', {
    type: 'draggable-block',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: t('This is a draggable section'),
          },
        ],
      },
    ],
  });
}
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator>
      <BaseButton class="w-10 h-10" type="button" @click="onClick">
        <GripVerticalIcon class="size-4 mx-auto text-center" />
      </BaseButton>
    </template>
    {{ $t('Draggable block') }}
  </AppTooltip>
</template>
