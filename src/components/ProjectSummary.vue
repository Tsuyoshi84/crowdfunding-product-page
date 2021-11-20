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
    <h1 class="name">{{ project.name }}</h1>
    <p class="description">{{ project.description }}</p>
    <div class="button-container">
      <primary-button @click="emit('clickBackProject')"
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
  margin-block-end: var(--spacing-24);
}
.name {
  font-size: var(--font-size-large);
  padding: 0 var(--spacing-8);
  text-align: center;
}
.description {
  color: var(--color-text-subtle);
  font-size: var(--font-size-small);
  text-align: center;
  line-height: var(--spacing-6);
  margin-block-end: var(--spacing-3);
}
.button-container {
  display: flex;
  justify-content: center;
}

@media (min-width: 62em) {
  .description {
    margin-block-end: var(--spacing-8);
  }
  .button-container {
    width: 100%;
    justify-content: space-between;
  }
}
</style>
