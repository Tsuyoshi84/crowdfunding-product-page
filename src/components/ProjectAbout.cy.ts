import { Project } from '@/models/project'
import ProjectAbout from './ProjectAbout.vue'

describe('<ProjectAbout>', () => {
	let project: Project

	beforeEach(() => {
		cy.fixture<Project>('project').then((p) => {
			project = p
			cy.mount(ProjectAbout, { props: { project } })
		})
	})

	it('shows texts', () => {
		cy.getBySel('about')
			.should('contain.text', 'About this project')
			.should('be.visible')

		cy.getBySel('detail')
			.should('contain.text', project.detail)
			.should('be.visible')
	})
})
