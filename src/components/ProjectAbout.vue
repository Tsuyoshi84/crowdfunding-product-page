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

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '../models/project'
import ProjectReward from './ProjectReward.vue'

export default defineComponent({
  name: 'ProjectAbout',
  components: { ProjectReward },
  props: {
    project: {
      type: Object as PropType<Readonly<Project>>,
      required: true,
    },
  },
  setup() {},
})
</script>
