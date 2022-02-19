<script setup lang="ts">
const props = defineProps({
  bookmarked: {
    type: Boolean,
    required: true,
  },
})

const label = $computed<string>(() => {
  return props.bookmarked ? 'Bookmarked' : 'Bookmark'
})
</script>

<template>
  <button
    class="bookmark-button"
    aria-label="Toggle bookmark"
    :class="{ bookmarked: props.bookmarked }"
    v-bind="$attrs"
    data-test="bookmark-button"
  >
    <!-- icon-bookmark.svg -->
    <svg class="icon" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
    <span class="label">{{ label }}</span>
  </button>
</template>

<style lang="postcss" scoped>
.bookmark-button {
  display: flex;
  align-items: center;
  gap: 1rem;
  border: none;
  background-color: var(--color-disabled-light-3);
  border-radius: 2rem;
  cursor: pointer;
  padding: 0;

  & .icon {
    width: var(--spacing-14);
    height: var(--spacing-14);

    & circle {
      transition: fill 0.2s ease-in-out;
      fill: var(--color-disabled-dark);
    }

    & path {
      transition: fill 0.2s ease-in-out;
      fill: var(--color-disabled-light-2);
    }
  }

  & .label {
    color: var(--color-disabled);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    transition: color 0.2s ease-in-out;
    display: none;

    @media (min-width: 62em) {
      display: initial;
    }
  }

  &:is(:hover, :focus, :active) {
    & .icon {
      & circle {
        fill: var(--color-disabled-light-1);
      }
    }

    & .label {
      color: var(--color-disabled-light-1);
    }
  }

  &.bookmarked {
    background-color: var(--color-primary-light-2);

    & .icon {
      & circle {
        fill: var(--color-primary-dark);
      }

      & path {
        fill: hsl(0, 0%, 100%);
      }
    }

    & .label {
      color: var(--color-primary-dark);
    }
  }
}

@media (min-width: 62em) {
  .bookmark-button {
    padding: 0 var(--spacing-6) 0 0;
  }
}
</style>
