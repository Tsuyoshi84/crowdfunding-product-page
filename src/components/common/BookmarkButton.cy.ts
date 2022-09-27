import BookmarkButton from './BookmarkButton.vue'

describe('<BookmarkButton>', () => {
	context('iphone-x viewport', () => {
		beforeEach(() => {
			cy.viewport('iphone-x')
		})

		it('should show button', () => {
			cy.mount(BookmarkButton, {}).get('button').should('be.visible')
		})

		it('should not show label', () => {
			cy.mount(BookmarkButton, {}).get('button').should('not.have.text')
		})

		it('have bookmarked class when bookmarked', () => {
			cy.mount(BookmarkButton, { props: { bookmarked: true } })
				.get('button')
				.should('have.class', 'bookmarked')
		})
	})

	context('macbook-13 viewport', () => {
		beforeEach(() => {
			cy.viewport('macbook-13')
		})

		it('should show button', () => {
			cy.mount(BookmarkButton, {}).get('button').should('be.visible')
		})

		it('should show label', () => {
			cy.mount(BookmarkButton, {}).get('button').should('have.text', 'Bookmark')
		})

		it('should show bookmarked label when bookmarked', () => {
			cy.mount(BookmarkButton, { props: { bookmarked: true } })
				.get('button')
				.should('have.text', 'Bookmarked')
		})
	})
})
