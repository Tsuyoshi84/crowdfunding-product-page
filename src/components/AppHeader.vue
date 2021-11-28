<script setup lang="ts">
import { ref, computed } from 'vue'

import iconCloseMenu from '@/assets/images/icon-close-menu.svg'
import iconHamburger from '@/assets/images/icon-hamburger.svg'

const isMenuOpen = ref(false)

const menuIconSrc = computed(() => {
  return isMenuOpen.value ? iconCloseMenu : iconHamburger
})

const buttonLabel = computed(() => {
  return isMenuOpen.value ? 'Close menu' : 'Open menu'
})
</script>

<template>
  <div class="backdrop-shadow" :class="{ open: isMenuOpen }"></div>
  <header>
    <div>
      <img
        class="logo"
        src="@/assets/images/logo.svg"
        alt="crowdfund"
        width="128"
        height="20"
      />
    </div>
    <div>
      <button
        class="menu-button"
        type="button"
        :aria-label="buttonLabel"
        @click="isMenuOpen = !isMenuOpen"
      >
        <img :src="menuIconSrc" alt="" />
      </button>
    </div>
    <nav :class="{ close: !isMenuOpen }">
      <ul>
        <li><a href="/about">About</a></li>
        <li><a href="/discover">Discover</a></li>
        <li><a href="/about">Get Started</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="postcss">
.backdrop-shadow.open {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.2)
  );
  z-index: var(--z-index-backdrop-shadow);
}

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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--spacing-6);
  z-index: var(--z-index-menu);

  & > .logo {
    margin: var(--spacing-6) 0 0 var(--spacing-6);
    object-fit: contain;
  }

  & > * {
    z-index: var(--z-index-menu);
  }
}

.menu-button {
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
}

nav {
  position: fixed;
  top: var(--spacing-16);
  width: 100%;
  z-index: var(--z-index-menu);

  &.close {
    display: none;
  }

  & ul {
    background-color: var(--color-background);
    padding: 0;
    width: calc(100% - var(--spacing-6) * 2);
    border-radius: var(--spacing-2);

    & li {
      list-style: none;
      padding: 0;
      padding: var(--spacing-6) var(--spacing-3);

      & > a {
        color: var(--color-text);
        font-size: var(--font-size-large);
        padding: 1rem;
        text-decoration: none;
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
      }
    }
  }
}
</style>
