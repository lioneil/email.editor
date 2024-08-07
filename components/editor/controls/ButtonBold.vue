<script lang="ts" setup>
import { BoldIcon } from 'lucide-vue-next';
import BaseButton from '~/components/buttons/BaseButton.vue';
import AppTooltip from '~/components/feedback/AppTooltip.vue';
</script>

<template>
  <AppTooltip data-placement="left">
    <template #activator>
      <BaseButton class="w-10 h-10" type="button">
        <BoldIcon class="size-4 mx-auto text-center" />
      </BaseButton>
    </template>
    {{ $t('Bold') }}
  </AppTooltip>
</template>
