<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '@/models/project'
import { formatNumber } from '@/ui/format'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<template>
  <section class="info-container">
    <div class="sub-info-container">
      <div class="main">${{ formatNumber(project.currentAmount) }}</div>
      <div class="sub">of ${{ formatNumber(project.targetAmount) }} backed</div>
    </div>
    <div class="border"></div>
    <div class="sub-info-container">
      <div class="main">{{ formatNumber(project.numOfBuckers) }}</div>
      <div class="sub">total backers</div>
    </div>
    <div class="border"></div>
    <div class="sub-info-container">
      <div class="main">{{ project.daysLeft }}</div>
      <div class="sub">days left</div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.info-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}
.sub-info-container {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
}
.main {
  font-size: var(--font-size-xxxxlarge);
  font-weight: var(--font-weight-bold);
  display: flex;
  justify-content: center;
}
.sub {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
  letter-spacing: 0.05rem;
  color: var(--color-text-subtle);
  display: flex;
  justify-content: center;
}
.border {
  width: 5rem;
  height: 1px;
  background-color: var(--color-border);
}
</style>
