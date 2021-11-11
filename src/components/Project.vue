<script lang="ts" setup>
import ProjectSummary from './ProjectSummary.vue'
import ProjectStatus from './ProjectStatus.vue'
import ProjectAbout from './ProjectAbout.vue'
import { useProjectStore } from '@/stores/project'
import { onMounted } from 'vue-demi'
import { storeToRefs } from 'pinia'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)

onMounted(async () => {
  await fetchProject()
})

async function bookmarkToggled() {
  await toggleBookmarked()
}
</script>

<template>
  <template v-if="project">
    <project-summary :project="project" @toggle-bookmark="bookmarkToggled" />
    <project-status :project="project" />
    <project-about :project="project" />
  </template>
</template>
