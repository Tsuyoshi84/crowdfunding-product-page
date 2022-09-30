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
	/* Reset the default appearance */
	appearance: none;
	block-size: 100%;
	color: var(--color-primary);
	inline-size: 100%;

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
