import PrimaryButton from './PrimaryButton.vue'

describe('<PrimaryButton>Button</PrimaryButton>', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(PrimaryButton)
  })
})
