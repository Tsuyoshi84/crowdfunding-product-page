<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '@/models/project'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import BookmarkButton from '@/components/common/BookmarkButton.vue'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})

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
      <primary-button data-test="back-project" @click="emit('clickBackProject')"
        >Back this project</primary-button
      >
      <bookmark-button
        data-testid="bookmark-button"
        :bookmarked="project.bookmarked"
        @click="emit('toggleBookmark')"
      />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.container {
  width: 100%;
  background-color: var(--color-background);
  border-radius: var(--spacing-2);
  border: 1px solid var(--color-border-light);
  padding: 0 var(--spacing-8) var(--spacing-12);
  display: flex;
  flex-direction: column;
  align-items: center;

  & .logo {
    --size: 3.5rem;
    width: var(--size);
    height: var(--size);
    margin-block-start: calc(var(--size) * -0.5);
  }

  & .name {
    font-size: var(--font-size-xxlarge);
    padding: 0 var(--spacing-8);
    text-align: center;
  }
  & .description {
    color: var(--color-text-subtle);
    font-size: var(--font-size-small);
    text-align: center;
    line-height: var(--spacing-6);
    margin-block-end: var(--spacing-3);
  }
  & .button-container {
    display: flex;
    justify-content: center;
  }
}

@media (min-width: 62em) {
  .container {
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
