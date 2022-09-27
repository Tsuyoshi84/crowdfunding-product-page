import { Project } from '@/models/project'

describe('Back project', () => {
	let project: Project

	beforeEach(() => {
		cy.visit('/')

		cy.fixture<Project>('project').then((p) => {
			project = p
		})
	})

	it('should show modals after backing', () => {
		cy.screenshot('01-project-page', { capture: 'viewport', overwrite: true })

		cy.getBySel('project-name')
			.should('be.visible')
			.should('contain.text', project.name!)

		cy.get('[data-test=project-description]')
			.should('be.visible')
			.should('contain.text', project.description!)

		cy.getBySel('back-project-button')
			.should('be.visible')
			.should('contain.text', 'Back this project')
			.click()
		cy.screenshot('02-show-project-modal', {
			capture: 'viewport',
			overwrite: true,
		})

		cy.getBySel('project-modal').should('be.visible')
		cy.getBySel('input-form').should('not.exist')

		cy.getBySel('reward-basic-info__reward-id-1').click()

		cy.getBySel('input-form')
			.should('contain.text', 'Enter your pledge')
			.should('be.visible')

		cy.getBySel('pledge-input')
			.should('have.value', 25)
			.type('{backspace}{backspace}')
			.type('1')
		cy.getBySel('submit-button').contains('Continue').should('be.disabled')

		cy.getBySel('pledge-input').type('{backspace}').type('100')
		cy.getBySel('submit-button').should('be.enabled').click()

		cy.screenshot('03-pledge-success', { capture: 'viewport', overwrite: true })
		cy.getBySel('project-modal').should('not.be.visible')
		cy.getBySel('complete-modal').should('be.visible')
		cy.getBySel('complete-modal-close-button').should('be.visible').click()
		cy.getBySel('complete-modal').should('not.be.visible')
	})
})
