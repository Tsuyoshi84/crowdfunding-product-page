<template>
  <div>{{ reward.name }}</div>
  <div>Pledge ${{ reward.pledge }} or more</div>
  <div>{{ reward.detail }}</div>
  <div>{{ reward.left }} left</div>
  <button>Select Reward</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ProjectReward } from '../models/project';

export default defineComponent({
  name: 'ProjectReward',
  props: {
    reward: {
      type: Object as PropType<ProjectReward>,
      required: true,
    },
  },
  setup() {},
});
</script>
