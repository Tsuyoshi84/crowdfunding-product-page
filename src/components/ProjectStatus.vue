<script lang="ts" setup>
import { Project } from '@/models/project'
import { formatNumber } from '@/ui/format'

interface Props {
	project: Project
}
const { project } = defineProps<Props>()
</script>

<template>
	<section class="container" data-test="project-status">
		<div class="info-container">
			<div class="sub-info-container">
				<div class="main">${{ formatNumber(project.currentAmount) }}</div>
				<div class="sub">
					of ${{ formatNumber(project.targetAmount) }} backed
				</div>
			</div>
			<div class="border"></div>
			<div class="sub-info-container">
				<div class="main">{{ formatNumber(project.numOfBuckers) }}</div>
				<div class="sub">total backers</div>
			</div>
			<div class="border"></div>
			<div class="sub-info-container">
				<div class="main">{{ project.daysLeft }}</div>
				<div class="sub">days left</div>
			</div>
		</div>
		<div class="progress-container">
			<ProjectProgress :project="project" />
		</div>
	</section>
</template>

<style scoped lang="postcss">
.container {
	display: flex;
	flex-direction: column;
	padding: var(--spacing-12);
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	background-color: var(--color-background);
	gap: var(--spacing-4);
	inline-size: 100%;

	& .info-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	& .sub-info-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
		inline-size: 100%;
	}

	& .main {
		display: flex;
		justify-content: center;
		font-size: var(--font-size-xxxxlarge);
		font-weight: var(--font-weight-bold);
	}

	& .sub {
		display: flex;
		justify-content: center;
		color: var(--color-text-subtle);
		font-size: var(--font-size-small);
		font-weight: var(--font-weight-light);
		letter-spacing: 0.05rem;
	}

	& .border {
		background-color: var(--color-border);
		block-size: 1px;
		inline-size: 5rem;
	}

	& .progress-container {
		block-size: var(--spacing-4);
		inline-size: 100%;
		margin-block-start: var(--spacing-4);
	}
}

@media (width >= 62em) {
	.container {
		& .info-container {
			flex-direction: row;
			justify-content: space-between;
			inline-size: 100%;
		}

		& .sub-info-container {
			align-items: flex-start;
		}

		& .border {
			block-size: 4rem;
			inline-size: 1px;
			transform: translateX(calc(var(--spacing-4) * -1));
		}
	}
}
</style>
