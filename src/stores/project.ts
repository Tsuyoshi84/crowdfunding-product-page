import { acceptHMRUpdate, defineStore } from 'pinia'
import { Project } from '@/models/project'
import { getProject } from '@/services/project-service'

type State = {
  project: Project | null
}

export const useProjectStore = defineStore('project', {
  state: () =>
    ({
      project: null,
    } as State),
  actions: {
    async fetchProject() {
      this.project = await getProject()
    },
    /**
     * Toggle bookmarked
     */
    toggleBookmarked() {
      if (this.project === null) return

      this.project = {
        ...this.project,
        bookmarked: !this.project.bookmarked,
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
