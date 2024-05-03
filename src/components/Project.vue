<script lang="ts" setup>
import type { ProjectReward } from '@/models/project'
import { useProjectStore } from '@/stores/project'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)

onMounted(async () => {
	await fetchProject()
})

const selectedReward = ref<ProjectReward>()

const isProjectModalOpen = ref(false)
const isCompleteModalOpen = ref(false)

function openModal(reward: ProjectReward | undefined = undefined): void {
	selectedReward.value = reward
	isProjectModalOpen.value = true
}

function showCompleteModal(): void {
	isProjectModalOpen.value = false
	isCompleteModalOpen.value = true
}

async function bookmarkToggled(): Promise<void> {
	await toggleBookmarked()
}
</script>

<template>
	<article class="article">
		<template v-if="project">
			<ProjectSummary
				:project="project"
				@click-back-project="openModal"
				@toggle-bookmark="bookmarkToggled"
			/>
			<ProjectStatus :project="project" />
			<ProjectAbout :project="project" @select-reward="({ reward }) => openModal(reward)" />
		</template>
	</article>
	<ProjectModal
		v-if="project"
		v-model:open="isProjectModalOpen"
		v-model:reward="selectedReward"
		:project="project"
		@submit="showCompleteModal"
	/>
	<ProjectCompleteModal v-model:open="isCompleteModalOpen" />
</template>

<style scoped>
.article {
	display: flex;
	margin-inline: var(--spacing-6);
	margin-block: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--spacing-6);
	transform: translateY(calc(var(--spacing-24) * -1));
}

@media (width >= 62em) {
	.article {
		max-inline-size: 45rem;
		margin-inline: auto auto;
	}
}
</style>
