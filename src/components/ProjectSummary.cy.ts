import type { Project } from '@/models/project'
import ProjectSummary from './ProjectSummary.vue'

describe('<ProjectSummary>', () => {
	let project: Project

	beforeEach(() => {
		cy.fixture<Project>('project').then((p) => {
			project = p
			cy.mount(ProjectSummary, { props: { project } })
		})
	})

	it('shows texts', () => {
		cy.getBySel('project-name').should('contain.text', project.name).should('be.visible')
		cy.getBySel('project-description')
			.should('contain.text', project.description)
			.should('be.visible')
	})
})
