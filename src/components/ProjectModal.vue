<script setup lang="ts">
import { Project } from '@/models/project'
import { PropType, watch, ref } from 'vue'
import ProjectRewardBox from '@/components/ProjectRewardBox.vue'

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits<{
  (e: 'clickClose'): void
  (e: 'submit'): void
}>()

const dialog = ref<null | HTMLElement>(null)

function openModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  ;(dialog.value as any).showModal()
}

function closeModal() {
  if (typeof (dialog.value as any)?.showModal !== 'function') {
    alert(`Sorry, this browser doesn't support dialog element. :(`)
    return
  }

  ;(dialog.value as any).close()
}

const selectedRewardId = ref<number | null>(null)

function selectReward(rewardId: number) {
  selectedRewardId.value = rewardId
}

function isSelected(rewardId: number): boolean {
  return rewardId === selectedRewardId.value
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      openModal()
    } else {
      closeModal()
    }
  },
)
</script>

<template>
  <dialog ref="dialog">
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
      Want to support us in bringing {{ props.project.name }} out in the world?
    </p>
    <div class="rewards-container">
      <project-reward-box />
      <project-reward-box
        v-for="reward in props.project.rewards"
        :key="reward.id"
        :reward="reward"
        :is-selected="isSelected(reward.id)"
        @select="selectReward(reward.id)"
        @submit="emit('submit')"
      />
    </div>
  </dialog>
</template>

<style scoped lang="postcss">
dialog {
  border: none;
  border-radius: var(--spacing-2);
  padding: var(--spacing-6);

  &::backdrop {
    background-color: hsl(0, 0%, 0%, 0.4);
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
  margin-block-end: var(--spacing-6);
  line-height: var(--spacing-6);
}

.rewards-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}
</style>
