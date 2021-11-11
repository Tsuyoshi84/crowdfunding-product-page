<script setup lang="ts">
import { computed } from 'vue'
import IconBookmark from '@/assets/images/icon-bookmark.svg'

const props = defineProps({
  bookmarked: {
    type: Boolean,
    required: true,
  },
})

const label = computed<string>(() => {
  return props.bookmarked ? 'Bookmarked' : 'Bookmark'
})
</script>

<template>
  <button
    class="bookmark-button"
    aria-label="Toggle bookmark"
    :class="{ bookmarked: props.bookmarked }"
    v-bind="$attrs"
  >
    <icon-bookmark class="icon" />
    <span class="label">{{ label }}</span>
  </button>
</template>

<style lang="postcss" scoped>
.bookmark-button {
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  & .icon {
    width: 3rem;
    height: 3rem;

    & /deep/ circle {
      transition: fill 0.2s ease-in-out;
      fill: var(--color-disabled);
    }

    & /deep/ path {
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
      & /deep/ circle {
        fill: var(--color-disabled-light-1);
      }
    }

    & .label {
      color: var(--color-disabled-light-1);
    }
  }

  &.bookmarked {
    & .icon {
      & /deep/ circle {
        fill: var(--color-primary);
      }

      & /deep/ path {
        fill: hsl(0, 0%, 100%);
      }
    }

    & .label {
      color: var(--color-primary);
    }

    &:is(:hover, :focus, :active) {
      & .icon {
        & /deep/ circle {
          fill: var(--color-primary-dark);
        }
      }

      & .label {
        color: var(--color-primary-dark);
      }
    }
  }
}
</style>
