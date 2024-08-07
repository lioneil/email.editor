<script lang="ts" setup>
const $props = withDefaults(
  defineProps<{
    to: string;
    replace?: boolean;
    restore?: boolean;
  }>(),
  {
    restore: true,
  }
);

const portal = ref();
const disabled = ref($props.replace);
const backups: string[] = [];

onMounted(() => {
  const $el = document.querySelectorAll($props.to);
  if ($props.replace && import.meta.client) {
    $el.forEach((el) => {
      backups.push(el.innerHTML);
      el.innerHTML = '';
    });
    disabled.value = false;
    portal.value.remove();
  }
});

onUnmounted(() => {
  if ($props.restore) {
    const $el = document.querySelectorAll($props.to);
    $el.forEach((el, i) => {
      el.innerHTML = backups?.[i] ?? '';
    });
  }
});
</script>

<template>
  <div ref="portal" class="hidden invisible">
    <ClientOnly>
      <Teleport :disabled="disabled" :to="to">
        <slot />
      </Teleport>
    </ClientOnly>
  </div>
</template>
