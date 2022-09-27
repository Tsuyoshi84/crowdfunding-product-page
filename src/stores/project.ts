import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Project } from '@/models/project'
import { getProject } from '@/services/project-service'

export const useProjectStore = defineStore('project', () => {
	/** Current project */
	const _project = ref<Project | null>(null)

	const project = computed(() => {
		return _project.value
	})

	/** Fetch project */
	async function fetchProject() {
		_project.value = await getProject()
	}

	async function toggleBookmarked() {
		if (!_project.value) return

		_project.value = {
			..._project.value,
			bookmarked: !_project.value.bookmarked,
		}
	}

	return {
		project,
		fetchProject,
		toggleBookmarked,
	}
})

if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
