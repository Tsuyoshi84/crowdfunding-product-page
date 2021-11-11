<script lang="ts" setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button
    type="button"
    class="primary-button"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<style lang="postcss" scoped>
.primary-button {
  color: var(--color-text-inversed);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-primary);
  border: none;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-16);
  cursor: pointer;
  transition: background-color 0.2s;

  &:is(:hover, :focus, :active) {
    background-color: var(--color-primary-dark);
  }
  &:disabled {
    background-color: var(--color-disabled-light-2);
    cursor: not-allowed;
  }
}
</style>
