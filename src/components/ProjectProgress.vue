<script lang="ts" setup>
import type { Project } from '@/models/project'

defineProps<{
	project: Project
}>()
</script>

<template>
	<progress
		class="progress"
		v-bind="{
			value: project.currentAmount,
			max: project.targetAmount,
		}"
	></progress>
</template>

<style scoped>
.progress {
	inline-size: 100%;
	block-size: 100%;
	color: var(--color-primary);

	/* Reset the default appearance */
	appearance: none;

	&[value]::-webkit-progress-bar {
		border-radius: var(--spacing-6);
		background-color: var(--color-background-gray);
	}

	&[value]::-webkit-progress-value {
		border-radius: var(--spacing-3);
		background-color: var(--color-primary);
	}
}
</style>
