<template>
  <section>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <primary-button>Back this project</primary-button>
    <div>Bookmarkded: {{ project.bookmarked }}</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '../models/project'
import PrimaryButton from './common/PrimaryButton.vue'

export default defineComponent({
  name: 'ProjectSummary',
  components: { PrimaryButton },
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {},
})
</script>
