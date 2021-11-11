<template>
  <main>
    <header></header>
    <project />
  </main>
</template>

<script lang="ts" setup>
import Project from './components/Project.vue'
</script>

<style lang="postcss">
header {
  background: #ff0000;
  background-image: url('@/assets/images/image-hero-mobile.jpg');
  background-size: cover;
  height: 19rem;
  border-bottom: 1px solid #eaeaea;
}

@media (min-width: 62em) {
  header {
    background-image: url('@/assets/images/image-hero-desktop.jpg');
  }
}
</style>
