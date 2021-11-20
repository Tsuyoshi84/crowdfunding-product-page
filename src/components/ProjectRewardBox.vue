<script lang="ts" setup>
import { computed, PropType, ref } from 'vue'
import { ProjectReward } from '@/models/project'
import ToggleMark from '@/components/common/ToggleMark.vue'
import ProjectRewardBoxForm from '@/components/ProjectRewardBoxForm.vue'

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
const minPledge = computed(() => props.reward?.pledge ?? 0)
const stock = computed(() => props.reward?.stock ?? 0)
const detail = computed(() => {
  return (
    props.reward?.detail ??
    'Choose to support us without a reward if you simple believe in our project. As a backer, you will be signed up to receive product updates via email'
  )
})

function nameClicked() {
  if (isOutOfStock.value) return

  emit('select')
}

const inputPledge = ref<number>(minPledge.value)
// const canSubmit = computed(() => inputPledge.value > 0)
</script>

<template>
  <section
    class="container"
    :class="{ 'out-of-stock': isOutOfStock, selected: isSelected }"
  >
    <div class="basic-info" @click="nameClicked">
      <div class="mark-wrapper">
        <toggle-mark :on="isSelected" />
      </div>
      <div class="name">{{ name }}</div>
      <div class="pledge">
        <template v-if="!isNoReward">Pledge ${{ minPledge }} or more</template>
      </div>
    </div>
    <div class="detail">{{ detail }}</div>
    <div class="stock-info">
      <div v-if="!isNoReward" class="left">
        <span class="number">{{ stock }}</span
        >left
      </div>
    </div>
    <project-reward-box-form
      v-if="isSelected"
      v-model="inputPledge"
      :min-pledge="minPledge"
      @submit="emit('submit')"
    />
    <!-- <form v-if="isSelected" @submit.prevent="emit('submit')">
      <label>Enter your pledge</label>
      <input v-model.number="inputPledge" type="number" min="0" />
      <primary-button type="submit" :disabled="!canSubmit"
        >Continue</primary-button
      >
    </form> -->
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

    & .mark-wrapper {
      width: var(--font-size-large);
      height: var(--font-size-large);
      opacity: 0;
      transition: opacity 0.2s;
    }
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
      & .mark-wrapper {
        opacity: 1;
      }
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
}

.container.out-of-stock {
  & .basic-info {
    & .name {
      color: var(--color-text-subtle);
    }
    & .pledge {
      color: var(--color-text-primary-light);
    }
    &:hover {
      cursor: default;
      & .name {
        color: var(--color-text-subtle);
      }
    }
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

.container.selected {
  border-color: var(--color-primary);
  border-width: 2px;

  & .basic-info {
    & .mark-wrapper {
      opacity: 1;
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
