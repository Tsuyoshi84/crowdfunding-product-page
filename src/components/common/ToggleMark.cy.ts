import ToggleMark from './ToggleMark.vue'
import ToggleMarkPreview from './ToggleMark.preview.vue'

describe('<ToggleMark>', () => {
  it('preview', () => {
    cy.mount(ToggleMarkPreview)
  })

  it('shows button', () => {
    cy.mount(ToggleMark, {}).get('.outer-circle').should('be.visible')
  })
})
