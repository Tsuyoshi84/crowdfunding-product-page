<template>
  <section>
    <h2>About this project</h2>
    <p>{{ project.detail }}</p>
    <ProjectReward
      v-for="reward in project.rewards"
      :key="reward.id"
      :reward="reward"
    />
  </section>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '../models/project'
import ProjectReward from './ProjectReward.vue'

const props = defineProps({
  project: {
    type: Object as PropType<Readonly<Project>>,
    required: true,
  },
})
</script>
