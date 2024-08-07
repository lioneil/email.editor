<script lang="ts" setup>
import { ItalicIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator="props">
      <BaseButton class="w-10 h-10" type="button">
        <ItalicIcon class="size-4 mx-auto" />
      </BaseButton>
    </template>
    {{ $t('Italic') }}
  </AppTooltip>
</template>
