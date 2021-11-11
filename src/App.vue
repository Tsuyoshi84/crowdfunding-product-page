<script lang="ts" setup>
import Project from './components/Project.vue'
</script>

<template>
  <header>
    <img class="logo" src="@/assets/images/logo.svg" alt="crowdfund" />
  </header>
  <main>
    <project />
  </main>
</template>

<style lang="postcss">
header {
  --gradient: linear-gradient(
    to bottom,
    hsla(0deg, 0%, 0%, 0.52),
    hsla(0deg, 0%, 100%, 0)
  );
  background-image: var(--gradient),
    url('@/assets/images/image-hero-mobile.jpg');
  background-size: cover;
  height: 19rem;
  border-block-end: 1px solid #eaeaea;

  & > .logo {
    margin: var(--spacing-6) 0 0 var(--spacing-6);
    object-fit: contain;
  }
}

@media (min-width: 62em) {
  header {
    background-image: var(--gradient),
      url('@/assets/images/image-hero-desktop.jpg');
  }
}
</style>
