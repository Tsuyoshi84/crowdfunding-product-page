<script lang="ts" setup>
interface Props {
  disabled: boolean
  type: 'button' | 'submit'
}
const { disabled = false, type = 'button' } = defineProps<Props>()
</script>

<template>
  <button
    :type="type"
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
  background-color: var(--color-primary);
  border: none;
  padding: var(--spacing-4) var(--spacing-12);
  border-radius: var(--spacing-16);
  cursor: pointer;
  transition: background-color 0.2s;
  min-height: var(--spacing-14);

  &:is(:hover, :focus, :active) {
    background-color: var(--color-primary-dark);
  }
  &:disabled {
    background-color: var(--color-disabled-light-2);
    cursor: not-allowed;
  }
}
</style>
