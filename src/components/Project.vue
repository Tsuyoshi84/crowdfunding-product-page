<script lang="ts" setup>
import ProjectSummary from './ProjectSummary.vue'
import ProjectStatus from './ProjectStatus.vue'
import ProjectAbout from './ProjectAbout.vue'
import { useProjectStore } from '@/stores/project'
import { onMounted } from 'vue-demi'
import { storeToRefs } from 'pinia'
import ProjectModal from './ProjectModal.vue'
import { ref } from 'vue'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)
const showsModal = ref(false)
const modal = ref<InstanceType<typeof ProjectModal>>()

onMounted(async () => {
  await fetchProject()
})

function openModal() {
  showsModal.value = true
}

function closeModal() {
  showsModal.value = false
}

function showCompleteModal() {
  closeModal()
}

async function bookmarkToggled() {
  await toggleBookmarked()
}
</script>

<template>
  <article class="article">
    <img
      class="logo"
      src="@/assets/images/logo-mastercraft.svg"
      width="50"
      height="50"
      alt=""
    />
    <template v-if="project">
      <project-summary
        :project="project"
        @click-back-project="openModal"
        @toggle-bookmark="bookmarkToggled"
      />
      <project-status :project="project" />
      <project-about :project="project" />
    </template>
  </article>
  <project-modal
    v-if="project"
    ref="modal"
    :project="project"
    :open="showsModal"
    @click-close="closeModal"
    @submit="showCompleteModal"
  />
</template>

<style lang="postcss" scoped>
.article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  border-radius: var(--spacing-2);
  margin: calc(var(--spacing-12) * -1) var(--spacing-6);
  padding: 0 var(--spacing-8);
}
.logo {
  --size: 3.5rem;
  width: var(--size);
  height: var(--size);
  margin-block-start: calc(var(--size) * -0.5);
}

@media (min-width: 62em) {
  .article {
    max-width: 40rem;
    margin-inline-start: auto;
    margin-inline-end: auto;
  }
}
</style>
