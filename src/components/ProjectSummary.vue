<script lang="ts" setup>
import { Project } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import BookmarkButton from '@/components/common/BookmarkButton.vue'

interface Props {
  project: Project
}
const { project } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'toggleBookmark'): void
  (e: 'clickBackProject'): void
}>()
</script>

<template>
  <section class="container">
    <img
      class="logo"
      src="@/assets/images/logo-mastercraft.svg"
      width="50"
      height="50"
      alt=""
    />
    <h1 data-test="project-name" class="name">{{ project.name }}</h1>
    <p data-test="project-description" class="description">
      {{ project.description }}
    </p>
    <div class="button-container">
      <PrimaryButton data-test="back-project" @click="emit('clickBackProject')"
        >Back this project</PrimaryButton
      >
      <BookmarkButton
        data-testid="bookmark-button"
        :bookmarked="project.bookmarked"
        @click="emit('toggleBookmark')"
      />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--spacing-8) var(--spacing-12);
  border: 1px solid var(--color-border-light);
  border-radius: var(--spacing-2);
  background-color: var(--color-background);

  & .logo {
    --size: 3.5rem;

    width: var(--size);
    height: var(--size);
    margin-block-start: calc(var(--size) * -0.5);
  }

  & .name {
    padding: 0 var(--spacing-8);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    margin-block-end: var(--spacing-1);
    text-align: center;
  }

  & .description {
    color: var(--color-text-subtle);
    font-size: var(--font-size-small);
    line-height: var(--spacing-6);
    margin-block-end: var(--spacing-3);
    text-align: center;
  }

  & .button-container {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 62em) {
  .container {
    padding: 0 var(--spacing-12) var(--spacing-12);

    & .name {
      font-size: var(--font-size-xxxlarge);
    }

    & .description {
      font-size: var(--font-size-medium);
      margin-block-end: var(--spacing-8);
    }

    & .button-container {
      width: 100%;
      justify-content: space-between;
    }
  }
}
</style>
