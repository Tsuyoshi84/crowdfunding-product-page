<script setup lang="ts">
import ToggleMark from '@/components/common/ToggleMark.vue'

const onList = [true, false]
</script>

<template>
  <div
    v-for="(on, index) in onList"
    :key="index"
    style="width: 50px; height: 50px"
  >
    <ToggleMark :on="on" />
  </div>
</template>
