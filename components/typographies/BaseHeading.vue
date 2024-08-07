<script lang="ts" setup>
const types = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
};

const $props = withDefaults(
  defineProps<{
    type?: keyof typeof types;
  }>(),
  {
    type: 'h1',
  }
);

const defaults = 'font-bold text-gray-950 dark:text-white';
const variant = computed(() => types[$props.type]);
</script>

<template>
  <component :is="type" :class="[defaults, variant]">
    <slot />
  </component>
</template>
