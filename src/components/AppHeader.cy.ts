import AppHeader from './AppHeader.vue'

describe('<AppHeader />', () => {
	context('iphone-x viewport', () => {
		beforeEach(() => {
			cy.viewport('iphone-x')
			cy.mount(AppHeader)
		})

		it('should not show links', () => {
			cy.get('nav').should('not.be.visible')
		})

		it('should show menu button', () => {
			cy.getBySel('menu-button').should('be.visible')
		})

		context('when menu button is clicked', () => {
			beforeEach(() => {
				cy.getBySel('menu-button').click()
			})

			it('should show links', () => {
				cy.get('nav').contains('About').should('be.visible')
				cy.get('nav').contains('Discover').should('be.visible')
				cy.get('nav').contains('Get Started').should('be.visible')
			})

			context('when menu button is clicked again', () => {
				beforeEach(() => {
					cy.getBySel('menu-button').click()
				})

				it('should hide links', () => {
					cy.get('nav').should('not.be.visible')
				})
			})
		})
	})

	context('macbook-13 viewport', () => {
		beforeEach(() => {
			cy.viewport('macbook-13')
			cy.mount(AppHeader)
		})

		it('should have links', () => {
			cy.get('nav').contains('About').should('be.visible').should('have.attr', 'href', '/about')
			cy.get('nav')
				.contains('Discover')
				.should('be.visible')
				.should('have.attr', 'href', '/discover')
			cy.get('nav')
				.contains('Get Started')
				.should('be.visible')
				.should('have.attr', 'href', '/get-started')
		})

		it('should not show menu button', () => {
			cy.getBySel('menu-button').should('not.be.visible')
		})
	})
})
