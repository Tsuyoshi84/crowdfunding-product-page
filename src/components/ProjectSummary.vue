<template>
  <section>
    <h1 class="title">{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <primary-button>Back this project</primary-button>
    <div>Bookmarkded: {{ project.bookmarked }}</div>
  </section>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { Project } from '../models/project'
import PrimaryButton from './common/PrimaryButton.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<style scoped lang="postcss">
.title {
  font-size: 1.2rem;
}
</style>
