<script lang="ts" setup>
import Project from './components/Project.vue'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
	<AppHeader />
	<main>
		<Project />
	</main>
</template>

<style lang="postcss">
main {
	background-color: var(--color-base-background);
}
</style>
