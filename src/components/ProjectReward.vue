<script lang="ts" setup>
import { PropType } from 'vue'
import { ProjectReward } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

defineProps({
  reward: {
    type: Object as PropType<ProjectReward>,
    required: true,
  },
})
</script>

<template>
  <section class="container">
    <div class="name">{{ reward.name }}</div>
    <div class="pledge">Pledge ${{ reward.pledge }} or more</div>
    <div class="detail">{{ reward.detail }}</div>
    <div class="left">
      <span class="number">{{ reward.left }}</span
      >left
    </div>
    <primary-button
      ><span class="button-label"> Select Reward</span></primary-button
    >
  </section>
</template>

<style lang="postcss" scoped>
.container {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--spacing-2);
}
.name {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-2);
}
.pledge {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  color: var(--font-color-primary);
  margin-bottom: var(--spacing-8);
}
.detail {
  font-size: var(--font-size-small);
  color: var(--font-color-sub);
  line-height: 1.5rem;
  margin-bottom: var(--spacing-8);
}
.left {
  color: var(--font-color-sub);
  margin-bottom: var(--spacing-8);

  & > .number {
    font-size: var(--font-size-xxxlarge);
    font-weight: var(--font-weight-bold);
    color: var(--font-color-main);
    margin-right: var(--spacing-2);
  }
}
.button-label {
  font-size: var(--font-size-small);
}
</style>
