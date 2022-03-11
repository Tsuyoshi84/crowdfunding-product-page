<script setup lang="ts">
interface Props {
  on: boolean
}

const { on = false } = defineProps<Props>()
</script>

<template>
  <div class="outer-circle" :class="{ on }">
    <div class="circle"></div>
  </div>
</template>

<style scoped lang="postcss">
.outer-circle {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;

  & .circle {
    width: 80%;
    height: 80%;
    background-color: transparent;
    border-radius: 50%;
    transition: all 0.2s;
  }
}

.outer-circle.on {
  & .circle {
    background-color: var(--color-primary);
  }
}
</style>
