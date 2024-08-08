<script lang="ts" setup>
import { CheckIcon, LinkIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';

const $emit = defineEmits(['click', 'update:link']);

const popover = ref<HTMLElement | null>(null);
const isOpen = ref(false);
const url = ref('');

function onClick() {
  isOpen.value = !isOpen.value;
  $emit('click');
}

function onSubmit() {
  isOpen.value = false;
  $emit('update:link', unref(url));
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node;
  if (
    popover.value &&
    !popover.value.contains(target) &&
    !popover.value.previousElementSibling?.contains(target)
  ) {
    isOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative">
    <AppTooltip data-placement="left">
      <template #activator>
        <BaseButton class="w-10 h-10" type="button" @click.stop="onClick">
          <LinkIcon class="size-4 mx-auto text-center" />
        </BaseButton>
      </template>
      {{ $t('Link') }}
    </AppTooltip>
    <div
      v-if="isOpen"
      ref="popover"
      class="absolute z-10 w-64 right-0 p-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
    >
      <strong>{{ $t('Insert Link') }}</strong>
      <div class="flex gap-2">
        <div class="max-w-sm space-y-3">
          <input
            v-model="url"
            :placeholder="$t('Add or paste link')"
            class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:focus:ring-gray-600"
            type="text"
          />
        </div>
        <BaseButton class="w-12" type="button" @click.stop="onSubmit">
          <CheckIcon class="size-4 mx-auto text-center" />
        </BaseButton>
      </div>
    </div>
  </div>
</template>
