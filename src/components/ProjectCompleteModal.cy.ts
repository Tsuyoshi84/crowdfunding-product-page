import ProjectCompleteModal from './ProjectCompleteModal.vue'

describe('<ProjectCompleteModal />', () => {
	const props = { open: true }

	it('should show dialog', () => {
		cy.mount(ProjectCompleteModal, { props })

		cy.get('dialog').should('be.visible')
	})

	it('should show texts', () => {
		cy.mount(ProjectCompleteModal, { props })

		cy.contains('Thanks for your support!')
	})

	it('should show button', () => {
		cy.mount(ProjectCompleteModal, { props })

		cy.get('button')
			.should('be.visible')
			.should('have.text', 'Got it!')
			.should('have.focus')
	})

	context('when click button', () => {
		it('should emit event', () => {
			const updateOpenSpy = cy.spy().as('updateOpenSpy')

			cy.mount(ProjectCompleteModal, {
				props: { ...props, ...{ 'onUpdate:open': updateOpenSpy } },
			})

			cy.get('button')
				.click()
				.get('@updateOpenSpy')
				.should('have.been.calledOnce')
		})
	})

	context('when open is false', () => {
		it('should not show dialog', () => {
			cy.mount(ProjectCompleteModal, { props })
				.then((wrapper) => {
					wrapper.setProps({ open: false })
				})
				.get('dialog')
				.should('not.be.visible')
		})
	})
})
