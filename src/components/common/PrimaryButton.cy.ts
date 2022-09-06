import PrimaryButton from './PrimaryButton.vue'

describe('<PrimaryButton>', () => {
  const label = 'Click me'
  const disabled = false
  const type = 'button'

  const slots = { default: () => label }
  const props = { disabled, type }
  const options = { slots, props }

  it('renders', () => {
    cy.mount(PrimaryButton, options)
  })

  it('shows label', () => {
    cy.mount(PrimaryButton, options).get('button').should('have.text', label)
  })

  it('emmits when clicked', () => {
    const clickSpy = cy.spy().as('clickSpy')

    cy.mount(PrimaryButton, { slots, props: { ...props, onClick: clickSpy } })
      .get('button')
      .click()

    cy.get('@clickSpy').should('have.been.calledOnce')
  })
})
