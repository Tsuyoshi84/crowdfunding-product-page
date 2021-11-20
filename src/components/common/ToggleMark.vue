<script setup lang="ts">
defineProps({
  on: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="outer-circle" :class="{ on }">
    <div class="circle"></div>
  </div>
</template>

<style scoped lang="postcss">
.outer-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-border);

  & .circle {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.2s;
  }
}
.outer-circle.on {
  & .circle {
    background-color: var(--color-primary);
  }
}
</style>
