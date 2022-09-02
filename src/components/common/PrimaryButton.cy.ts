import PrimaryButton from './PrimaryButton.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('<PrimaryButton>', () => {
  it('renders', () => {
    cy.mount(PrimaryButton, { slots: { default: () => 'Button' } })
  })
})
