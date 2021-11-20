<script setup lang="ts">
defineProps({
  on: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="wrapper">
    <div class="circle" :class="{ on }"></div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
    background-color: transparent;
    transition: all 0.2s;

    &.on {
      width: 80%;
      height: 80%;
      background-color: var(--color-primary);
    }
  }
}
</style>
