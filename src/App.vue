<script lang="ts" setup>
import Project from './components/Project.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <app-header />
  <main>
    <project />
  </main>
</template>

<style lang="postcss">
@media (min-width: 62em) {
  header {
    background-image: var(--gradient),
      url('@/assets/images/image-hero-desktop.jpg');
  }
}
</style>
