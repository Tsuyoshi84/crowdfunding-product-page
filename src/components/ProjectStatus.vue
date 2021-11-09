<script lang="ts" setup>
import { PropType } from 'vue'
import { Project } from '@/models/project'
import { formatNumber } from '@/ui/format'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<template>
  <section>
    <div>
      <div>${{ formatNumber(project.currentAmount) }}</div>
      <div>of ${{ formatNumber(project.targetAmount) }} backed</div>
    </div>
    <div>
      <div>
        {{ formatNumber(project.numOfBuckers) }}
      </div>
      <div>total backers</div>
    </div>
    <div>
      <div>{{ project.daysLeft }}</div>
      <div>days left</div>
    </div>
  </section>
</template>
