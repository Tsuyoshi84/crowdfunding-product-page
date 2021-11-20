<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { ProjectReward } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const props = defineProps({
  reward: {
    type: Object as PropType<ProjectReward | null>,
    default: null,
  },
  isSelected: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'select'): void
  (e: 'submit'): void
}>()

const isOutOfStock = computed(() => {
  if (props.reward === null) return false

  return props.reward.stock === 0
})
const isNoReward = computed(() => props.reward === null)
const name = computed(() => props.reward?.name ?? 'Pledge with no reward')
const pledge = computed(() => props.reward?.pledge ?? 0)
const stock = computed(() => props.reward?.stock ?? 0)
const detail = computed(() => {
  return (
    props.reward?.detail ??
    'Choose to support us without a reward if you simple believe in our project. As a backer, you will be signed up to receive product updates via email'
  )
})

const inputPledge = ref<number>(25)

const canSubmit = computed(() => inputPledge.value > 0)
</script>

<template>
  <section
    class="container"
    :class="{ 'out-of-stock': isOutOfStock, selected: isSelected }"
  >
    <div class="basic-info" @click="emit('select')">
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
    <form v-if="isSelected" @submit.prevent="emit('submit')">
      <label>Enter your pledge</label>
      <input v-model.number="inputPledge" type="number" min="0" />
      <primary-button type="submit" :disabled="!canSubmit"
        >Continue</primary-button
      >
    </form>
  </section>
</template>

<style lang="postcss" scoped>
.container {
  padding: var(--spacing-6);
  border: 1px solid var(--color-border);
  border-radius: var(--spacing-2);
  transition: border 0.2s;

  & .basic-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 var(--spacing-8);

    & .name {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      margin-block-end: var(--spacing-2);
      transition: color 0.2s;
    }
    & .pledge {
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--color-text-primary);
      margin-block-end: var(--spacing-8);
    }

    &:hover {
      cursor: pointer;

      & .name {
        color: var(--color-text-primary);
      }
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

  &.selected {
    border-color: var(--color-primary);
    border-width: 2px;
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
