<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '@/models/project'

const props = defineProps({
  project: {
    type: Object as PropType<Readonly<Project>>,
    required: true,
  },
})
</script>

<template>
  <progress
    class="progress"
    v-bind="{
      value: props.project.currentAmount,
      max: props.project.targetAmount,
    }"
  ></progress>
</template>

<style lang="postcss" scoped>
.progress {
  appearance: none;
  width: 100%;
  height: 100%;
  color: var(--color-primary);

  &[value]::-webkit-progress-bar {
    background-color: var(--color-background);
    border-radius: var(--spacing-6);
  }

  &[value]::-webkit-progress-value {
    border-radius: var(--spacing-3);
    background-color: var(--color-primary);
  }
}
</style>
