<script setup lang="ts">
import { computed } from 'vue'

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
    :class="{ bookmarked: props.bookmarked }"
    v-bind="$attrs"
  >
    <div class="icon"></div>
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
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background-color: var(--color-disabled);
    transition: background-color 0.2s ease-in-out;
  }

  & .label {
    color: var(--color-disabled);
    font-size: var(--font-size-medium);
    font-weight: var(--font-weight-bold);
    transition: color 0.2s ease-in-out;
  }

  &:is(:hover, :focus, :active) {
    & .icon {
      background-color: var(--color-disabled-active);
    }

    & .label {
      color: var(--color-disabled-active);
    }
  }

  &.bookmarked {
    & .icon {
      background-color: var(--color-primary-dark);
    }

    & .label {
      color: var(--color-primary-dark);
    }

    &:is(:hover, :focus, :active) {
      & .icon {
        background-color: var(--color-primary);
      }

      & .label {
        color: var(--color-primary);
      }
    }
  }
}
</style>
