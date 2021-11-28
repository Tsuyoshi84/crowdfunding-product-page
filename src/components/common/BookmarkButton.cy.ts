import { mount } from '@cypress/vue'
import { it, describe, cy } from 'local-cypress'
import BookmarkButton from './BookmarkButton.vue'
import BookmarkButtonExample from './BookmarkButton.ex.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('BookmarkButton', () => {
  const viewportList: Cypress.ViewportPreset[] = ['iphone-x', 'macbook-13']

  for (const viewport of viewportList) {
    it(`viewportList=${viewport}`, () => {
      cy.viewport(viewport)
      mount(BookmarkButtonExample)
    })
  }

  it('shows button', () => {
    mount(BookmarkButton, {}).get('button').should('be.visible')
  })
})
