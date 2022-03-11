<script lang="ts" setup>
import ProjectSummary from './ProjectSummary.vue'
import ProjectStatus from './ProjectStatus.vue'
import ProjectAbout from './ProjectAbout.vue'
import { useProjectStore } from '@/stores/project'
import { onMounted } from 'vue-demi'
import { storeToRefs } from 'pinia'
import ProjectModal from './ProjectModal.vue'
import { ref } from 'vue'
import ProjectCompleteModal from './ProjectCompleteModal.vue'
import { ProjectReward } from '@/models/project'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)

onMounted(async () => {
  await fetchProject()
})

let selectedReward = $ref<ProjectReward | null>(null)
let showsModal = $ref(false)

function openModal(reward: ProjectReward | null = null) {
  selectedReward = reward
  showsModal = true
}
function closeModal() {
  showsModal = false
}

const showsCompleteModal = ref(false)
function showCompleteModal() {
  closeModal()
  showsCompleteModal.value = true
}
function closeCompleteModal() {
  showsCompleteModal.value = false
}

async function bookmarkToggled() {
  await toggleBookmarked()
}
</script>

<template>
  <article class="article">
    <template v-if="project">
      <project-summary
        :project="project"
        @click-back-project="openModal"
        @toggle-bookmark="bookmarkToggled"
      />
      <project-status :project="project" />
      <project-about
        :project="project"
        @select-reward="({ reward }) => openModal(reward)"
      />
    </template>
  </article>
  <project-modal
    v-if="project"
    :project="project"
    :reward="selectedReward"
    :open="showsModal"
    @click-close="closeModal"
    @submit="showCompleteModal"
  />
  <project-complete-modal
    :open="showsCompleteModal"
    @click-close="closeCompleteModal"
  />
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
