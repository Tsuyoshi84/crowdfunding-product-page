<script lang="ts" setup>
import ProjectSummary from './ProjectSummary.vue'
import ProjectStatus from './ProjectStatus.vue'
import ProjectAbout from './ProjectAbout.vue'
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import ProjectModal from './ProjectModal.vue'
import { onMounted } from 'vue'
import ProjectCompleteModal from './ProjectCompleteModal.vue'
import { ProjectReward } from '@/models/project'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)

onMounted(async () => {
  await fetchProject()
})

let selectedReward = $ref<ProjectReward | null>(null)

const projectModal = $ref<null | InstanceType<typeof ProjectModal>>(null)
const completeModal = $ref<null | InstanceType<typeof ProjectCompleteModal>>(
  null,
)

function openModal(reward: ProjectReward | null = null): void {
  selectedReward = reward
  projectModal?.open()
}

function showCompleteModal(): void {
  projectModal?.close()
  completeModal?.open()
}

async function bookmarkToggled(): Promise<void> {
  await toggleBookmarked()
}
</script>

<template>
  <article class="article">
    <template v-if="project">
      <ProjectSummary
        :project="project"
        @click-back-project="openModal"
        @toggle-bookmark="bookmarkToggled"
      />
      <ProjectStatus :project="project" />
      <ProjectAbout
        :project="project"
        @select-reward="({ reward }) => openModal(reward)"
      />
    </template>
  </article>
  <ProjectModal
    v-if="project"
    ref="projectModal"
    :project="project"
    :reward="selectedReward"
    @submit="showCompleteModal"
  />
  <ProjectCompleteModal ref="completeModal" />
</template>

<style lang="postcss" scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 var(--spacing-6);
  gap: var(--spacing-6);
  transform: translateY(calc(var(--spacing-24) * -1));
}

@media (min-width: 62em) {
  .article {
    max-width: 45rem;
    margin-inline-end: auto;
    margin-inline-start: auto;
  }
}
</style>
