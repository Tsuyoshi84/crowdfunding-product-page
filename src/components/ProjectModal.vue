<script setup lang="ts">
import { Project, ProjectReward } from '@/models/project'
import { watch, ref } from 'vue'
import ProjectRewardBox from '@/components/ProjectRewardBox.vue'

interface Props {
  project: Project
  reward: ProjectReward | null
  open: boolean
}
const { reward = null, open = false } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'clickClose'): void
  (e: 'submit'): void
}>()

const noRewardId = 0
const dialog = ref<null | HTMLElement>(null)

function openModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  selectedRewardId.value = reward?.id ?? null
  ;(dialog.value as any).showModal()
}

function closeModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  ;(dialog.value as any).close()
}

watch(
  () => open,
  (open) => {
    if (open) {
      openModal()
    } else {
      closeModal()
    }
  },
)

const selectedRewardId = ref<number | null>(null)

function selectReward(rewardId: number) {
  selectedRewardId.value = rewardId
}

function isSelected(rewardId: number): boolean {
  return rewardId === selectedRewardId.value
}
</script>

<template>
  <dialog ref="dialog" data-test="project-modal">
    <div class="title-container">
      <h2 class="title">Back this project</h2>
      <button
        class="close-button"
        aria-label="close"
        @click="emit('clickClose')"
      >
        <img src="@/assets/images/icon-close-modal.svg" alt="" />
      </button>
    </div>
    <p class="explanation">
      Want to support us in bringing {{ project.name }} out in the world?
    </p>
    <div class="rewards-container">
      <project-reward-box
        :is-selected="isSelected(noRewardId)"
        @select="selectReward(noRewardId)"
        @submit="emit('submit')"
      />
      <project-reward-box
        v-for="r in project.rewards"
        :key="r.id"
        :reward="r"
        :is-selected="isSelected(r.id)"
        @select="selectReward(r.id)"
        @submit="emit('submit')"
      />
    </div>
  </dialog>
</template>

<style scoped lang="postcss">
dialog {
  z-index: var(--z-index-modal);
  padding: var(--spacing-6);
  border: none;
  border-radius: var(--spacing-2);

  &::backdrop {
    background-color: hsl(0deg 0% 0% / 40%);
  }
}

.title-container {
  display: flex;
  justify-content: space-between;

  & .title {
    font-size: var(--font-size-large);
  }

  & .close-button {
    border: none;
    cursor: pointer;
  }
}

.explanation {
  color: var(--color-text-subtle);
  font-size: var(--font-size-small);
  line-height: var(--spacing-6);
  margin-block-end: var(--spacing-6);
}

.rewards-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}
</style>
