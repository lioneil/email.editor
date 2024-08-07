<script lang="ts" setup>
import { MessageSquareQuoteIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator>
      <BaseButton class="w-10 h-10" type="button">
        <MessageSquareQuoteIcon class="size-4 mx-auto text-center" />
      </BaseButton>
    </template>
    {{ $t('Blockquote') }}
  </AppTooltip>
</template>
