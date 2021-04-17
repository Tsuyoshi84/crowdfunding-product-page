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

<style lang="postcss">
:root {
  --color-primary: #3cb4ab;
  --color-primary-dark: #157a74;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Commissioner', sans-serif;
}

ProjectSummary#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
