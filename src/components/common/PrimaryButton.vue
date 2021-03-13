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
