<script lang="ts" setup>
import { PropType } from 'vue'
import { Project, ProjectReward as Reward } from '@/models/project'
import ProjectReward from '@/components/ProjectReward.vue'

defineProps({
  project: {
    type: Object as PropType<Readonly<Project>>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'selectReward', detail: { reward: Reward }): void
}>()
</script>

<template>
  <section>
    <h2 class="about">About this project</h2>
    <p class="detail">{{ project.detail }}</p>
    <div class="reward-wrapper">
      <ProjectReward
        v-for="reward in project.rewards"
        :key="reward.id"
        :reward="reward"
        @click-select="emit('selectReward', { reward })"
      />
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.about {
  font-size: var(--font-size-large);
}
.detail {
  font-size: var(--font-size-small);
  color: var(--color-text-subtle);
  line-height: 1.5rem;
  white-space: break-spaces;
  margin-block-end: var(--spacing-8);
}
.reward-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}
</style>
