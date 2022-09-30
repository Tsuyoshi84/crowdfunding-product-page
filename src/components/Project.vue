<script lang="ts" setup>
import ProjectSummary from './ProjectSummary.vue'
import ProjectStatus from './ProjectStatus.vue'
import ProjectAbout from './ProjectAbout.vue'
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import ProjectModal from './ProjectModal.vue'
import { onMounted } from 'vue'
import ProjectCompleteModal from './ProjectCompleteModal.vue'
import { ProjectReward } from '@/models/project'

const store = useProjectStore()
const { fetchProject, toggleBookmarked } = store
const { project } = storeToRefs(store)

onMounted(async () => {
	await fetchProject()
})

let selectedReward = $ref<ProjectReward | null>(null)

let isProjectModalOpen = $ref(false)
let isCompleteModalOpen = $ref(false)

function openModal(reward: ProjectReward | null = null): void {
	selectedReward = reward
	isProjectModalOpen = true
}

function showCompleteModal(): void {
	isProjectModalOpen = false
	isCompleteModalOpen = true
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
			<ProjectAbout
				:project="project"
				@select-reward="({ reward }) => openModal(reward)"
			/>
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

<style lang="postcss" scoped>
.article {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: var(--spacing-6);
	margin-block: 0;
	margin-inline: var(--spacing-6);
	transform: translateY(calc(var(--spacing-24) * -1));
}

@media (width >= 62em) {
	.article {
		margin-inline-end: auto;
		margin-inline-start: auto;
		max-inline-size: 45rem;
	}
}
</style>
