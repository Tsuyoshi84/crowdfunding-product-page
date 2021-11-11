<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { ProjectReward } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const props = defineProps({
  reward: {
    type: Object as PropType<ProjectReward>,
    required: true,
  },
})

const isOutOfStock = computed(() => {
  return props.reward.stock === 0
})
const buttonLabel = computed(() => {
  return isOutOfStock.value ? 'Out of Stock' : 'Select Reward'
})
</script>

<template>
  <section class="container" :class="{ 'out-of-stock': isOutOfStock }">
    <div class="name">{{ reward.name }}</div>
    <div class="pledge">Pledge ${{ reward.pledge }} or more</div>
    <div class="detail">{{ reward.detail }}</div>
    <div class="left">
      <span class="number">{{ reward.stock }}</span
      >left
    </div>
    <primary-button :disabled="isOutOfStock"
      ><span class="button-label">{{ buttonLabel }}</span></primary-button
    >
  </section>
</template>

<style lang="postcss" scoped>
.container {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--spacing-2);

  & .name {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    margin-block-end: var(--spacing-2);
  }
  & .pledge {
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-block-end: var(--spacing-8);
  }
  & .detail {
    font-size: var(--font-size-small);
    color: var(--color-text-subtle);
    line-height: 1.5rem;
    margin-block-end: var(--spacing-8);
  }
  & .left {
    color: var(--color-text-subtle);
    margin-block-end: var(--spacing-8);

    & > .number {
      font-size: var(--font-size-xxxlarge);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-main);
      margin-inline-end: var(--spacing-2);
    }
  }
  & .button-label {
    font-size: var(--font-size-small);
  }

  &.out-of-stock {
    & .name {
      color: var(--color-text-subtle);
    }
    & .pledge {
      color: var(--color-text-primary-light);
    }
    & .detail {
      color: var(--color-text-xsubtle);
    }
    & .left {
      & > .number {
        color: var(--color-text-subtle);
      }
    }
  }
}
</style>
