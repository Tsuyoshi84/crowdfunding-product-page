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
  <section>
    <div>
      <div class="main">${{ formatNumber(project.currentAmount) }}</div>
      <div class="sub">of ${{ formatNumber(project.targetAmount) }} backed</div>
    </div>
    <div>
      <div class="main">{{ formatNumber(project.numOfBuckers) }}</div>
      <div class="sub">total backers</div>
    </div>
    <div>
      <div class="main">{{ project.daysLeft }}</div>
      <div class="sub">days left</div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.main {
  font-size: var(--font-size-xxlarge);
  font-weight: var(--font-weight-bold);
}
.sub {
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-light);
  color: var(--font-color-sub);
}
</style>
