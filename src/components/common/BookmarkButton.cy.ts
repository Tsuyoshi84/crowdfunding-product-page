import { mount } from '@cypress/vue'
import { it, describe, cy } from 'local-cypress'
import BookmarkButton from './BookmarkButton.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('BookmarkButton', () => {
  const bookmarkedList = [true, false]
  const viewportList: Cypress.ViewportPreset[] = ['iphone-x', 'macbook-13']

  for (const viewport of viewportList) {
    for (const bookmarked of bookmarkedList) {
      it(`viewportList=${viewport}, bookmarked=${bookmarked}`, () => {
        cy.viewport(viewport)
        mount(BookmarkButton, { props: { bookmarked } })
      })
    }
  }

  it('shows button', () => {
    mount(BookmarkButton, {}).get('button').should('be.visible')
  })
})
