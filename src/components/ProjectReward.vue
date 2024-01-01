<script lang="ts" setup>
import { ProjectReward } from '@/models/project'

type Props = {
	reward: ProjectReward
}
const props = defineProps<Props>()

const emit = defineEmits<{
	clickSelect: []
}>()

const isOutOfStock = computed<boolean>(() => props.reward.stock === 0)
const buttonLabel = computed<string>(() =>
	isOutOfStock.value ? 'Out of Stock' : 'Select Reward',
)
</script>

<template>
	<section
		class="reward-container"
		:class="{ 'out-of-stock': isOutOfStock }"
		data-test="project-reward"
	>
		<div class="basic-info">
			<div class="name" data-test="name">{{ reward.name }}</div>
			<div class="pledge" data-test="pledge">
				Pledge ${{ reward.pledge }} or more
			</div>
		</div>
		<div class="detail" data-test="detail">{{ reward.detail }}</div>
		<div class="stock-info">
			<div class="left">
				<span class="number" data-test="number">{{ reward.stock }}</span
				>left
			</div>
			<PrimaryButton
				:disabled="isOutOfStock"
				data-test="select-reward-button"
				@click="emit('clickSelect')"
				><span class="button-label">{{ buttonLabel }}</span></PrimaryButton
			>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.reward-container {
	padding: var(--spacing-6);
	border: 1px solid var(--color-border);
	border-radius: var(--spacing-2);

	& .basic-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		& .name {
			margin-block-end: var(--spacing-2);
			font-size: var(--font-size-small);
			font-weight: var(--font-weight-bold);
		}

		& .pledge {
			margin-block-end: var(--spacing-8);
			font-size: var(--font-size-small);
			color: var(--color-text-primary);
		}
	}

	& .detail {
		margin-block-end: var(--spacing-8);
		font-size: var(--font-size-small);
		line-height: 1.5rem;
		color: var(--color-text-subtle);
	}

	& .stock-info {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--spacing-6);

		& .left {
			color: var(--color-text-subtle);

			& > .number {
				margin-inline-end: var(--spacing-2);
				font-size: var(--font-size-xxxlarge);
				font-weight: var(--font-weight-bold);
				color: var(--color-text-main);
			}
		}
	}

	& .button-label {
		font-size: var(--font-size-small);
	}

	&.out-of-stock {
		& .name {
			color: var(--color-text-subtle);
		}

		& .pledge {
			color: var(--color-text-primary-light);
		}

		& .detail {
			color: var(--color-text-xsubtle);
		}

		& .left {
			& > .number {
				color: var(--color-text-subtle);
			}
		}
	}
}

@media (width >= 62em) {
	.container {
		& .basic-info {
			flex-direction: row;

			& .name {
				font-size: var(--font-size-large);
			}

			& .pledge {
				font-size: var(--font-size-medium);
			}
		}

		& .detail {
			font-size: var(--font-size-medium);
			line-height: 2rem;
		}

		& .stock-info {
			flex-direction: row;
		}
	}
}
</style>
