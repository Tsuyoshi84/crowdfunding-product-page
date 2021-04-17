<template>
  <button type="button" :disabled="disabled"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'ProjectAbout',
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {},
})
</script>

<style lang="postcss" scoped>
button {
  color: #ffffff;
  font-weight: bold;
  background-color: var(--color-primary);
  border: none;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--spacing-16);
  cursor: pointer;
  transition: background-color 0.2s;

  &:is(:hover, :focus, :active) {
    background-color: var(--color-primary-dark);
  }
}
</style>
