<template>
  <div class="tooltip group" data-component="tooltip" data-placement="bottom">
    <slot name="activator" />
    <span class="tooltip-text group-hover:opacity-100"> <slot /></span>
  </div>
</template>

<style lang="postcss">
.tooltip {
  --tooltip-offset: 5px;

  @apply relative;

  .tooltip-text {
    @apply absolute text-nowrap mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-300;
  }

  &[data-placement='top'] .tooltip-text {
    bottom: calc(var(--tooltip-offset) * -1);
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-placement='right'] .tooltip-text {
    top: 50%;
    left: calc(100% + var(--tooltip-offset));
    transform: translateY(-50%);
  }

  &[data-placement='bottom'] .tooltip-text {
    top: calc(100% + var(--tooltip-offset));
    left: 50%;
    transform: translateX(-50%);
  }

  &[data-placement='left'] .tooltip-text {
    top: 50%;
    right: calc(100% + var(--tooltip-offset));
    transform: translateY(-50%);
  }
}
</style>
