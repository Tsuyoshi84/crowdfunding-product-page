import PrimaryButton from './PrimaryButton.vue'

describe('<PrimaryButton>', () => {
  const label = 'Click me'
  const slots = { default: () => label }

  it('should mount', () => {
    cy.mount(PrimaryButton, { slots })
  })

  it('should show label', () => {
    cy.mount(PrimaryButton, { slots }).get('button').should('have.text', label)
  })

  it('should emmit when clicked', () => {
    const clickSpy = cy.spy().as('clickSpy')

    cy.mount(PrimaryButton, { slots, props: { onClick: clickSpy } })
      .get('button')
      .click()

    cy.get('@clickSpy').should('have.been.calledOnce')
  })

  it('should have button type as default', () => {
    cy.mount(PrimaryButton, { slots })
      .get('button')
      .should('have.attr', 'type', 'button')
  })

  it('should have specified type', () => {
    const type = 'submit'
    cy.mount(PrimaryButton, { slots, props: { type } })
      .get('button')
      .should('have.attr', 'type', type)
  })

  it('should be disabled', () => {
    cy.mount(PrimaryButton, { slots, props: { disabled: true } })
      .get('button')
      .should('be.disabled')
  })
})
