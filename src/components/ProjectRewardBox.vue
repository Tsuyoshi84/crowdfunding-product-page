<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { ProjectReward } from '@/models/project'

const props = defineProps({
  reward: {
    type: Object as PropType<ProjectReward | null>,
    default: null,
  },
})

const isOutOfStock = computed(() => {
  if (props.reward === null) return false

  return props.reward.stock === 0
})

const isNoReward = computed(() => {
  return props.reward === null
})

const name = computed(() => {
  return props.reward?.name ?? 'Pledge with no reward'
})

const pledge = computed(() => {
  return props.reward?.pledge ?? 0
})

const detail = computed(() => {
  return (
    props.reward?.detail ??
    'Choose to support us without a reward if you simple believe in our project. As a backer, you will be signed up to receive product updates via email'
  )
})

const stock = computed(() => {
  return props.reward?.stock ?? 0
})
</script>

<template>
  <section class="container" :class="{ 'out-of-stock': isOutOfStock }">
    <div class="basic-info">
      <div class="name">{{ name }}</div>
      <div class="pledge">
        <template v-if="!isNoReward">Pledge ${{ pledge }} or more</template>
      </div>
    </div>
    <div class="detail">{{ detail }}</div>
    <div class="stock-info">
      <div v-if="!isNoReward" class="left">
        <span class="number">{{ stock }}</span
        >left
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.container {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--spacing-2);

  & .basic-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--spacing-8);

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
  }

  & .detail {
    font-size: var(--font-size-small);
    color: var(--color-text-subtle);
    line-height: 1.5rem;
    margin-block-end: var(--spacing-8);
  }
  & .stock-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--spacing-6);
    margin-block-end: var(--spacing-4);
    & .left {
      color: var(--color-text-subtle);

      & > .number {
        font-size: var(--font-size-large);
        font-weight: var(--font-weight-bold);
        color: var(--color-text-main);
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
    }
    & .stock-info {
      flex-direction: row;
    }
  }
}
</style>
