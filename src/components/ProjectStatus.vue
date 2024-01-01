<script lang="ts" setup>
import type { Project } from '@/models/project'
import { formatNumber } from '@/ui/format'

type Props = {
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
	inline-size: 100%;
	padding: var(--spacing-12);
	border: 1px solid var(--color-border-light);
	border-radius: var(--spacing-2);
	flex-direction: column;
	gap: var(--spacing-4);
	background-color: var(--color-background);

	& .info-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
	}

	& .sub-info-container {
		display: flex;
		inline-size: 100%;
		flex-direction: column;
		justify-content: center;
		gap: 0.5rem;
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
		font-size: var(--font-size-small);
		font-weight: var(--font-weight-light);
		letter-spacing: 0.05rem;
		color: var(--color-text-subtle);
	}

	& .border {
		inline-size: 5rem;
		block-size: 1px;
		background-color: var(--color-border);
	}

	& .progress-container {
		inline-size: 100%;
		block-size: var(--spacing-4);
		margin-block-start: var(--spacing-4);
	}
}

@media (width >= 62em) {
	.container {
		& .info-container {
			inline-size: 100%;
			flex-direction: row;
			justify-content: space-between;
		}

		& .sub-info-container {
			align-items: flex-start;
		}

		& .border {
			inline-size: 1px;
			block-size: 4rem;
			transform: translateX(calc(var(--spacing-4) * -1));
		}
	}
}
</style>
