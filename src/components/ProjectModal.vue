<script setup lang="ts">
import { Project, ProjectReward } from '@/models/project'

interface Props {
	project: Project
	reward: ProjectReward | null
	open: boolean
}

const { reward = null, open = false } = defineProps<Props>()

const emit = defineEmits<{
	submit: []
	'update:reward': [ProjectReward | null]
	'update:open': [boolean]
}>()

let noRewardSelected = $ref(false)

const dialog = $ref<null | HTMLDialogElement>(null)
function show(): void {
	dialog?.showModal()
}
function close(): void {
	noRewardSelected = false
	dialog?.close()
	emit('update:open', false)
}

watch(
	() => open,
	(open) => (open ? show() : close()),
)

function selectReward(reward: ProjectReward | null): void {
	noRewardSelected = reward === null

	emit('update:reward', reward)
}

defineExpose({
	open,
	close,
})

function isSelected({ id }: ProjectReward): boolean {
	return id === reward?.id
}
</script>

<template>
	<dialog ref="dialog" data-test="project-modal">
		<header class="title-container">
			<h2 class="title">Back this project</h2>
			<button class="close-button" aria-label="close" autofocus @click="close">
				<img src="@/assets/images/icon-close-modal.svg" alt="" />
			</button>
		</header>
		<article>
			<p class="explanation">
				Want to support us in bringing {{ project.name }} out in the world?
			</p>
			<div class="rewards-container">
				<ProjectRewardBox
					:is-selected="noRewardSelected"
					@select="selectReward(null)"
					@submit="emit('submit')"
				/>
				<ProjectRewardBox
					v-for="r in project.rewards"
					:key="r.id"
					:reward="r"
					:is-selected="isSelected(r)"
					@select="selectReward(r)"
					@submit="emit('submit')"
				/>
			</div>
		</article>
	</dialog>
</template>

<style scoped lang="postcss">
dialog {
	z-index: var(--z-index-modal);
	padding: var(--spacing-6);
	border: none;
	border-radius: var(--spacing-2);

	&::backdrop {
		background-color: hsl(0deg 0% 0% / 40%);
		transition: backdrop-filter 0.3s ease;
	}
}

.title-container {
	display: flex;
	justify-content: space-between;

	& .title {
		font-size: var(--font-size-large);
	}

	& .close-button {
		border: none;
		cursor: pointer;
	}
}

.explanation {
	color: var(--color-text-subtle);
	font-size: var(--font-size-small);
	line-height: var(--spacing-6);
	margin-block-end: var(--spacing-6);
}

.rewards-container {
	display: flex;
	flex-direction: column;
	gap: var(--spacing-6);
}
</style>
