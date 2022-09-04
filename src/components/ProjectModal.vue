<script setup lang="ts">
import ProjectRewardBox from '@/components/ProjectRewardBox.vue'
import { Project, ProjectReward } from '@/models/project'
import { defineExpose, ref } from 'vue'

interface Props {
  project: Project
  reward: ProjectReward | null
}
const { reward = null } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const noRewardId = 0

const dialog = $ref<null | HTMLDialogElement>(null)
function open(): void {
  selectedRewardId.value = reward?.id ?? null
  dialog?.showModal()
}
function close(): void {
  dialog?.close()
}

defineExpose({
  open,
  close,
})

const selectedRewardId = ref<number | null>(null)
function selectReward(rewardId: number): void {
  selectedRewardId.value = rewardId
}
function isSelected(rewardId: number): boolean {
  return rewardId === selectedRewardId.value
}
</script>

<template>
  <dialog ref="dialog" data-test="project-modal">
    <header class="title-container">
      <h2 class="title">Back this project</h2>
      <button class="close-button" aria-label="close" autofocus @click="close">
        <img src="@/assets/images/icon-close-modal.svg" alt="" />
      </button>
    </header>
    <article>
      <p class="explanation">
        Want to support us in bringing {{ project.name }} out in the world?
      </p>
      <div class="rewards-container">
        <ProjectRewardBox
          :is-selected="isSelected(noRewardId)"
          @select="selectReward(noRewardId)"
          @submit="emit('submit')"
        />
        <ProjectRewardBox
          v-for="r in project.rewards"
          :key="r.id"
          :reward="r"
          :is-selected="isSelected(r.id)"
          @select="selectReward(r.id)"
          @submit="emit('submit')"
        />
      </div>
    </article>
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
