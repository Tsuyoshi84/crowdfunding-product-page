import ToggleMark from './ToggleMark.vue'
import ToggleMarkPreview from './ToggleMark.preview.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('<ToggleMark>', () => {
  it('preview', () => {
    cy.mount(ToggleMarkPreview)
  })

  it('shows button', () => {
    cy.mount(ToggleMark, {}).get('.outer-circle').should('be.visible')
  })
})
