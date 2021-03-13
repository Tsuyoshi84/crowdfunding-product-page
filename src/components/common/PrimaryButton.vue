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

<style lang="scss" scoped>
@import '../../styles/_variables.scss';

button {
  color: #ffffff;
  background-color: $color-primary;
  border: none;
  height: 32px;
  border-radius: 16px;

  &:hover,
  :focus,
  :active {
    background-color: $color-emphasis;
  }
}
</style>
