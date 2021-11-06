<script lang="ts" setup>
import { PropType } from 'vue'
import { ProjectReward } from '../models/project'

defineProps({
  reward: {
    type: Object as PropType<ProjectReward>,
    required: true,
  },
})
</script>

<template>
  <div>{{ reward.name }}</div>
  <div>Pledge ${{ reward.pledge }} or more</div>
  <div>{{ reward.detail }}</div>
  <div>{{ reward.left }} left</div>
  <button>Select Reward</button>
</template>
