<template>
  <section>
    <div>
      <div>${{ project.currentAmount }}</div>
      <div>of ${{ project.targetAmount }} backed</div>
    </div>
    <div>
      <div>
        {{ project.numOfBuckers }}
      </div>
      <div>total backers</div>
    </div>
    <div>
      <div>{{ project.daysLeft }}</div>
      <div>days left</div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Project } from '../models/project'

export default defineComponent({
  name: 'ProjectStatus',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {},
})
</script>
