import ToggleMark from './ToggleMark.vue'

describe('<ToggleMark>', () => {
  it('should show', () => {
    cy.mount(ToggleMark).get('div.outer-circle').should('be.visible')
  })

  it('inner circle background is transparent when not active', () => {
    cy.mount(ToggleMark)
      .get('div.inner-circle')
      .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })

  it('inner circle background is not transparent when not active', () => {
    cy.mount(ToggleMark, { props: { on: true } })
      .get('div.inner-circle')
      .should('not.have.css', 'background-color', 'rgba(0, 0, 0, 0)')
  })
})
