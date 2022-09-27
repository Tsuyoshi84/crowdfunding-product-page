<script lang="ts" setup>
import { Project } from '@/models/project'

interface Props {
	project: Project
}
const { project } = defineProps<Props>()
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

<style lang="postcss" scoped>
.progress {
	width: 100%;
	height: 100%;

	/* Reset the default appearance */
	appearance: none;
	color: var(--color-primary);

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
