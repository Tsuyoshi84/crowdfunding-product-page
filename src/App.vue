<template>
  <project />
  <img src="./assets/active-states-bookmarked.jpg" alt="" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Project from './components/Project.vue'

export default defineComponent({
  name: 'App',
  components: {
    Project,
  },
  setup() {},
})
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
