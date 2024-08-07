<script lang="ts" setup>
import AppContainer from '~/components/containment/AppContainer.vue';
import BaseHeading from '~/components/typographies/BaseHeading.vue';
import EmailEditIcon from '~/components/icons/EmailEditIcon.vue';
import AppGrid from '~/components/containment/AppGrid.vue';
import EditorSplitPane from '~/components/editor/EditorSplitPane.vue';
</script>

<template>
  <AppGrid class="flex flex-col !gap-0 min-h-screen">
    <AppContainer class="flex flex-col gap-3" full>
      <BaseHeading class="font-bold flex items-center gap-2" type="h3">
        <EmailEditIcon class="size-7" />
        {{ $t('Email Editor') }}
      </BaseHeading>
    </AppContainer>

    <AppContainer class="flex grow min-h-full gap-3 p-0 px-0 !pt-0" full>
      <EditorSplitPane class="flex-grow" />
    </AppContainer>
  </AppGrid>
</template>
