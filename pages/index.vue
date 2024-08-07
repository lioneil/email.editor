<script lang="ts" setup>
import AppContainer from '~/components/containment/AppContainer.vue';
import BaseHeading from '~/components/typographies/BaseHeading.vue';
import EmailEditIcon from '~/components/icons/EmailEditIcon.vue';
</script>

<template>
  <AppContainer class="flex flex-col h-screen gap-3" full>
    <BaseHeading class="font-bold flex items-center gap-2" type="h3">
      <EmailEditIcon class="size-7" />
      {{ $t('Email Editor') }}
    </BaseHeading>
    <EditorSplitPane class="flex-grow" />
  </AppContainer>
</template>
