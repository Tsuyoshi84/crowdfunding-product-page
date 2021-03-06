<template>
  <section>
    <h2>About this project</h2>
    <p>{{ project.detail }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Project } from '../models/project';

export default defineComponent({
  name: 'ProjectAbout',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {},
});
</script>
