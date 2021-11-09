<template>
  <project />
  <img src="@/assets/design/active-states-default.jpg" alt="" />
  <img src="@/assets/design/mobile-design.jpg" alt="" />
</template>

<script lang="ts" setup>
import Project from './components/Project.vue'
</script>

<style lang="postcss">
:root {
  --color-primary: hsl(175deg 39% 52%);
  --color-primary-dark: hsl(175deg 39% 35%);
  --color-disabled: hsl(0deg 0% 44%);
  --color-disabled-light-1: hsl(0deg 0% 54%);
  --color-disabled-light-2: hsl(0deg 0% 69%);

  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;

  --font-size-small: 0.75rem;
  --font-size-medium: 1rem;
  --font-size-large: 1.25rem;
  --font-size-xlarge: 1.5rem;
  --font-size-xxlarge: 1.75rem;
  --font-size-xxxlarge: 2rem;

  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  --font-color-inversed: hsl(0deg 0% 100%);
  --font-color-sub: hsl(0deg 0% 50%);
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
