<script lang="ts" setup>
import { Project, ProjectReward as Reward } from '@/models/project'

type Props = {
	project: Project
}
defineProps<Props>()

const emit = defineEmits<{
	selectReward: [detail: { reward: Reward }]
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
	inline-size: 100%;
	margin-block-end: var(--spacing-24);
	padding: var(--spacing-12);
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	background-color: var(--color-background);

	& .about {
		margin-inline: 0;
		margin-block: 0 var(--spacing-8);
		font-size: var(--font-size-large);
	}

	& .detail {
		margin-block-end: var(--spacing-8);
		font-size: var(--font-size-small);
		line-height: 1.5rem;
		white-space: break-spaces;
		color: var(--color-text-subtle);
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
