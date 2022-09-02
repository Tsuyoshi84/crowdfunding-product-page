<script lang="ts" setup>
import { ProjectReward } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

interface Props {
  reward: ProjectReward
}
const { reward } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'clickSelect'): void
}>()

const isOutOfStock = $computed<boolean>(() => {
  return reward.stock === 0
})
const buttonLabel = $computed<string>(() => {
  return isOutOfStock ? 'Out of Stock' : 'Select Reward'
})
</script>

<template>
  <section class="reward-container" :class="{ 'out-of-stock': isOutOfStock }">
    <div class="basic-info">
      <div class="name" data-test="name">{{ reward.name }}</div>
      <div class="pledge" data-test="pledge">
        Pledge ${{ reward.pledge }} or more
      </div>
    </div>
    <div class="detail" data-test="detail">{{ reward.detail }}</div>
    <div class="stock-info">
      <div class="left">
        <span class="number" data-test="number">{{ reward.stock }}</span
        >left
      </div>
      <PrimaryButton :disabled="isOutOfStock" @click="emit('clickSelect')"
        ><span class="button-label">{{ buttonLabel }}</span></PrimaryButton
      >
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.reward-container {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--spacing-2);

  & .basic-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & .name {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      margin-block-end: var(--spacing-2);
    }

    & .pledge {
      color: var(--color-text-primary);
      font-size: var(--font-size-small);
      margin-block-end: var(--spacing-8);
    }
  }

  & .detail {
    color: var(--color-text-subtle);
    font-size: var(--font-size-small);
    line-height: 1.5rem;
    margin-block-end: var(--spacing-8);
  }

  & .stock-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--spacing-6);

    & .left {
      color: var(--color-text-subtle);

      & > .number {
        color: var(--color-text-main);
        font-size: var(--font-size-xxxlarge);
        font-weight: var(--font-weight-bold);
        margin-inline-end: var(--spacing-2);
      }
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

@media (min-width: 62em) {
  .container {
    & .basic-info {
      flex-direction: row;

      & .name {
        font-size: var(--font-size-large);
      }

      & .pledge {
        font-size: var(--font-size-medium);
      }
    }

    & .detail {
      font-size: var(--font-size-medium);
      line-height: 2rem;
    }

    & .stock-info {
      flex-direction: row;
    }
  }
}
</style>
