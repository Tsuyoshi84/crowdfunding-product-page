<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '@/models/project'
import ProjectReward from '@/components/ProjectReward.vue'

const props = defineProps({
  project: {
    type: Object as PropType<Readonly<Project>>,
    required: true,
  },
})
</script>

<template>
  <section>
    <h2 class="about">About this project</h2>
    <p class="detail">{{ project.detail }}</p>
    <ProjectReward
      v-for="reward in project.rewards"
      :key="reward.id"
      :reward="reward"
    />
  </section>
</template>

<style lang="postcss" scoped>
.about {
  font-size: var(--font-size-large);
}
.detail {
  font-size: var(--font-size-small);
  color: var(--font-color-sub);
  line-height: 1.5rem;
}
</style>
