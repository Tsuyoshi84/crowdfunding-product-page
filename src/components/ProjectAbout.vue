<script lang="ts" setup>
import { Project, ProjectReward as Reward } from '@/models/project'

interface Props {
	project: Project
}
defineProps<Props>()

const emit = defineEmits<{
	(e: 'selectReward', detail: { reward: Reward }): void
}>()
</script>

<template>
	<section class="container">
		<h2 class="about" data-test="about">About this project</h2>
		<p class="detail" data-test="detail">{{ project.detail }}</p>
		<div class="reward-wrapper">
			<ProjectReward
				v-for="reward in project.rewards"
				:key="reward.id"
				:reward="reward"
				@click-select="emit('selectReward', { reward })"
			/>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.container {
	padding: var(--spacing-12);
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	background-color: var(--color-background);
	inline-size: 100%;
	margin-block-end: var(--spacing-24);

	& .about {
		font-size: var(--font-size-large);
		margin-block: 0 var(--spacing-8);
		margin-inline: 0;
	}

	& .detail {
		color: var(--color-text-subtle);
		font-size: var(--font-size-small);
		line-height: 1.5rem;
		margin-block-end: var(--spacing-8);
		white-space: break-spaces;
	}

	& .reward-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-6);
	}
}

@media (width >= 62em) {
	.container {
		& .detail {
			font-size: var(--font-size-medium);
			line-height: 2rem;
		}
	}
}
</style>
