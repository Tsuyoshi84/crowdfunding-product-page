<template>
  <section>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
    <button>Back this project</button>
    <div>Bookmarkded: {{ project.bookmarked }}</div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Project } from '../models/project';

export default defineComponent({
  name: 'ProjectSummary',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {},
});
</script>
