<script lang="ts" setup>
import { ProjectReward } from '@/models/project'
import ToggleMark from '@/components/common/ToggleMark.vue'
import ProjectRewardBoxForm from '@/components/ProjectRewardBoxForm.vue'

interface Props {
  reward: ProjectReward | null
  isSelected: boolean
}

const { reward = null, isSelected = false } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'select'): void
  (e: 'submit'): void
}>()

const isOutOfStock = $computed(() => {
  if (reward === null) return false

  return reward.stock === 0
})
const isNoReward = $computed(() => reward === null)
const name = $computed(() => reward?.name ?? 'Pledge with no reward')
const minPledge = $computed(() => reward?.pledge ?? 0)
const stock = $computed(() => reward?.stock ?? 0)
const detail = $computed(() => {
  return (
    reward?.detail ??
    'Choose to support us without a reward if you simple believe in our project. As a backer, you will be signed up to receive product updates via email'
  )
})

function nameClicked() {
  if (isOutOfStock) return

  emit('select')
}

const inputPledge = $ref<number>(minPledge)
</script>

<template>
  <section
    class="container"
    :class="{ 'out-of-stock': isOutOfStock, selected: isSelected }"
    data-test="project-reward-box"
  >
    <div class="basic-info" data-test="reward-basic-info" @click="nameClicked">
      <div class="mark-wrapper">
        <toggle-mark :on="isSelected" />
      </div>
      <div class="name-wrapper">
        <div class="name">{{ name }}</div>
        <div class="pledge">
          <template v-if="!isNoReward"
            >Pledge ${{ minPledge }} or more</template
          >
        </div>
      </div>
    </div>
    <div class="detail">{{ detail }}</div>
    <div class="stock-info">
      <div v-if="!isNoReward" class="left">
        <span class="number">{{ stock }}</span
        >left
      </div>
    </div>
    <div class="form-wrapper">
      <project-reward-box-form
        v-if="isSelected"
        v-model="inputPledge"
        :min-pledge="minPledge"
        @submit="emit('submit')"
      />
    </div>
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
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: var(--spacing-4);
    margin-block-end: var(--spacing-6);

    & .name-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

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
  & .form-wrapper {
    margin-block-start: var(--spacing-12);
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
