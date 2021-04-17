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
  background-color: var(--color-primary);
  border: none;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;

  &:hover,
  :focus,
  :active {
    background-color: var(--color-primary-dark);
  }
}
</style>
