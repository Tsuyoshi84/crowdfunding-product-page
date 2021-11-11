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

const emits = defineEmits<{
  (e: 'toggleBookmark'): void
}>()

function bookmarkClicked() {
  emits('toggleBookmark')
}
</script>

<template>
  <section class="container">
    <h1 class="name">{{ project.name }}</h1>
    <p class="description">{{ project.description }}</p>
    <div class="button-container">
      <primary-button @click="bookmarkClicked"
        >Back this project</primary-button
      >
      <bookmark-button
        :bookmarked="project.bookmarked"
        @click="bookmarkClicked"
      />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.container {
  margin-bottom: var(--spacing-24);
}
.name {
  font-size: var(--font-size-large);
  padding: 0 var(--spacing-16);
  text-align: center;
}
.description {
  color: var(--color-text-subtle);
  font-size: var(--font-size-small);
  padding: 0 var(--spacing-12);
  text-align: center;
  line-height: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}
.button-container {
  display: flex;
  justify-content: center;
}
</style>
