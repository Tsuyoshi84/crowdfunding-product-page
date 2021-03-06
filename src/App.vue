<template>
  <project-summary :project="project" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectSummary from './components/ProjectSummary.vue';
import { Project } from './models/project';

export default defineComponent({
  name: 'App',
  components: {
    ProjectSummary,
  },
  setup() {
    let project: Project = {
      name: 'Mastercraft Bamboo Monitor Riser',
      description: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
      bookmarked: true,
      currentAmount: 89914,
      targetAmount: 100000,
      numOfBuckers: 5007,
      daysLeft: 56,
    };

    return {
      project,
    };
  },
});
</script>

<style>
ProjectSummary#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
