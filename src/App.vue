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

  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-size: 16px;
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
