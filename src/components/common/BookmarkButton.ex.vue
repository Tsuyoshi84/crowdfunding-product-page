<script setup lang="ts">
import BookmarkButton from '@/components/common/BookmarkButton.vue'

const bookmarkedList = [true, false]
</script>

<template>
  <bookmark-button
    v-for="(bookmarked, index) in bookmarkedList"
    :key="index"
    :bookmarked="bookmarked"
  />
</template>
