import BookmarkButton from './BookmarkButton.vue'
import BookmarkButtonPreview from './BookmarkButton.preview.vue'

describe('<BookmarkButton>', () => {
  const viewportList: Cypress.ViewportPreset[] = ['iphone-x', 'macbook-13']

  for (const viewport of viewportList) {
    it(`Preview viewportList=${viewport}`, () => {
      cy.viewport(viewport)
      cy.mount(BookmarkButtonPreview)
    })
  }

  it('shows button', () => {
    cy.mount(BookmarkButton, {}).get('button').should('be.visible')
  })
})
