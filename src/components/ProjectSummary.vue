<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '../models/project'
import PrimaryButton from './common/PrimaryButton.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})

const emits = defineEmits<{
  (e: 'toggleBookmark'): void
}>()

function bookmarkClicked() {
  emits('toggleBookmark')
}
</script>

<template>
  <section>
    <h1 class="title">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <primary-button @click="bookmarkClicked">Back this project</primary-button>
    <div>Bookmarked: {{ project.bookmarked }}</div>
  </section>
</template>

<style scoped lang="postcss">
.title {
  font-size: 1.2rem;
}
</style>
