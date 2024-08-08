<script lang="ts" setup>
import { BaselineIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';

const $emit = defineEmits(['update:color']);

const $props = defineProps<{
  color?: string;
}>();

const palette = ref();
const newColor = ref($props.color);

function openColorPalette() {
  palette.value.click();
}

watchEffect(() => {
  if (newColor.value) {
    $emit('update:color', unref(newColor));
  }
});
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator>
      <BaseButton class="w-10 h-10" type="button" @click="openColorPalette">
        <BaselineIcon :style="`color: ${newColor}`" class="size-4 mx-auto text-center" />
      </BaseButton>
      <input ref="palette" v-model="newColor" class="invisible absolute" type="color" />
    </template>
    {{ $t('Text color') }}
  </AppTooltip>
</template>
