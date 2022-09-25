<script setup lang="ts">
interface Props {
  on: boolean
}

const { on = false } = defineProps<Props>()
</script>

<template>
  <div class="outer-circle" :class="{ on }">
    <div class="inner-circle"></div>
  </div>
</template>

<style scoped lang="postcss">
.outer-circle {
  display: flex;
  width: 100%;
  min-width: 20px;
  height: 100%;
  min-height: 20px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  aspect-ratio: 1;

  & .inner-circle {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.2s;
  }
}

.outer-circle.on {
  & .inner-circle {
    background-color: var(--color-primary);
  }
}
</style>
