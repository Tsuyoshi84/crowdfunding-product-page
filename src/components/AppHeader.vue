<script setup lang="ts">
import iconCloseMenu from '@/assets/images/icon-close-menu.svg'
import iconHamburger from '@/assets/images/icon-hamburger.svg'

const isMenuOpen = $ref(false)

const menuIconSrc = $computed(() => {
  return isMenuOpen ? iconCloseMenu : iconHamburger
})

const buttonLabel = $computed(() => {
  return isMenuOpen ? 'Close menu' : 'Open menu'
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
        <img :src="menuIconSrc" alt="" width="16" height="15" />
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
  z-index: var(--z-index-backdrop-shadow);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgb(0 0 0 / 50%),
    rgb(0 0 0 / 20%)
  );
}

header {
  --gradient: linear-gradient(
    to bottom,
    hsl(0deg 0% 0% / 52%),
    hsl(0deg 0% 100% / 0%)
  );

  z-index: var(--z-index-menu);
  display: flex;
  height: 19rem;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--spacing-6);
  background-image: var(--gradient),
    url('@/assets/images/image-hero-mobile.jpg');
  background-size: cover;
  border-block-end: 1px solid #eaeaea;

  & > .logo {
    margin: var(--spacing-6) 0 0 var(--spacing-6);
    object-fit: contain;
  }

  & > * {
    z-index: var(--z-index-menu);
  }
}

.menu-button {
  padding: 0;
  border: none;
  cursor: pointer;
  outline: none;
}

nav {
  position: fixed;
  z-index: var(--z-index-menu);
  top: var(--spacing-16);
  width: 100%;

  &.close {
    display: none;
  }

  & ul {
    width: calc(100% - var(--spacing-6) * 2);
    padding: 0;
    background-color: var(--color-background);
    border-radius: var(--spacing-2);

    & li {
      padding: 0;
      padding: var(--spacing-6) var(--spacing-3);
      list-style: none;

      & > a {
        padding: 1rem;
        color: var(--color-text);
        font-size: var(--font-size-large);
        text-decoration: none;
      }

      &:not(:last-child) {
        border-bottom: 1px solid var(--color-border);
      }
    }
  }
}

@media (min-width: 62em) {
  header {
    height: 25rem;
    padding: var(--spacing-12) var(--spacing-36);
    background-image: var(--gradient),
      url('@/assets/images/image-hero-desktop.jpg');
  }

  .menu-button {
    display: none;
  }

  nav {
    position: initial;
    width: initial;

    &.close {
      display: block;
    }

    & ul {
      display: flex;
      width: initial;
      padding: 0;
      margin: 0;
      background-color: initial;
      gap: var(--spacing-8);

      & li {
        padding: 0;

        & > a {
          padding: 0;
          color: var(--color-text-inversed);
          font-size: var(--font-size-small);

          &:hover {
            cursor: pointer;
          }
        }

        &:not(:last-child) {
          border-bottom: initial;
        }
      }
    }
  }
}
</style>
