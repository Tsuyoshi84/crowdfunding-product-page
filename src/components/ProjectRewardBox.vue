<script lang="ts" setup>
import { ProjectReward } from '@/models/project'

interface Props {
	reward?: ProjectReward | null
	isSelected: boolean
}

const { reward = null, isSelected = false } = defineProps<Props>()

const emit = defineEmits<{
	select: []
	submit: []
}>()

const isOutOfStock = computed<boolean>(() => {
	if (reward === null) return false

	return reward.stock === 0
})
const isNoReward = computed<boolean>(() => reward === null)
const name = computed<string>(() => reward?.name ?? 'Pledge with no reward')
const minPledge = computed<number>(() => reward?.pledge ?? 0)
const stock = computed<number>(() => reward?.stock ?? 0)
const detail = computed<string>(() => {
	return (
		reward?.detail ??
		'Choose to support us without a reward if you simple believe in our project. As a backer, you will be signed up to receive product updates via email'
	)
})

function nameClicked() {
	if (isOutOfStock.value) return

	emit('select')
}

const inputPledge = ref<number>(minPledge.value)
</script>

<template>
	<section
		class="container"
		:class="{ 'out-of-stock': isOutOfStock, selected: isSelected }"
		:data-test="`project-reward-box__reward-id-${reward?.id ?? 0}`"
	>
		<div
			class="basic-info"
			:data-test="`reward-basic-info__reward-id-${reward?.id ?? 0}`"
			@click="nameClicked"
		>
			<div class="mark-wrapper">
				<ToggleMark :on="isSelected" />
			</div>
			<div class="name-wrapper">
				<div class="name">{{ name }}</div>
				<div class="pledge">
					<template v-if="!isNoReward"
						>Pledge ${{ minPledge }} or more</template
					>
				</div>
			</div>
		</div>
		<div class="detail">{{ detail }}</div>
		<div class="stock-info">
			<div v-if="!isNoReward" class="left">
				<span class="number">{{ stock }}</span
				>left
			</div>
		</div>
		<div class="form-wrapper">
			<ProjectRewardBoxForm
				v-if="isSelected"
				v-model="inputPledge"
				:min-pledge="minPledge"
				@submit="emit('submit')"
			/>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.container {
	padding: var(--spacing-6);
	border: 1px solid var(--color-border);
	border-radius: var(--spacing-2);
	transition: border 0.2s;

	& .basic-info {
		display: flex;
		margin-block-end: var(--spacing-6);
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		gap: var(--spacing-4);

		& .name-wrapper {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}

		& .mark-wrapper {
			inline-size: var(--font-size-large);
			block-size: var(--font-size-large);
			opacity: 0;
			transition: opacity 0.2s;
		}

		& .name {
			margin-block-end: var(--spacing-2);
			font-size: var(--font-size-small);
			font-weight: var(--font-weight-bold);
			transition: color 0.2s;
		}

		& .pledge {
			font-size: var(--font-size-small);
			font-weight: var(--font-weight-bold);
			color: var(--color-text-primary);
		}

		&:hover {
			cursor: pointer;

			& .mark-wrapper {
				opacity: 1;
			}

			& .name {
				color: var(--color-text-primary);
			}
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
		margin-block-end: var(--spacing-4);
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		gap: var(--spacing-6);

		& .left {
			color: var(--color-text-subtle);

			& > .number {
				margin-inline-end: var(--spacing-2);
				font-size: var(--font-size-large);
				font-weight: var(--font-weight-bold);
				color: var(--color-text-main);
			}
		}
	}

	& .form-wrapper {
		margin-block-start: var(--spacing-12);
	}

	& .button-label {
		font-size: var(--font-size-small);
	}
}

.container.selected {
	border-width: 2px;
	border-color: var(--color-primary);

	& .basic-info {
		& .mark-wrapper {
			opacity: 1;
		}
	}
}

.container.out-of-stock {
	& .basic-info {
		& .name {
			color: var(--color-text-subtle);
		}

		& .pledge {
			color: var(--color-text-primary-light);
		}

		&:hover {
			cursor: default;

			& .name {
				color: var(--color-text-subtle);
			}
		}
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

@media (width >= 62em) {
	.container {
		& .basic-info {
			flex-direction: row;
		}

		& .stock-info {
			flex-direction: row;
		}
	}
}
</style>
