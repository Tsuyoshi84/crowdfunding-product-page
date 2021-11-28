import { mount } from '@cypress/vue'
import PrimaryButton from './PrimaryButton.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('PrimaryButton', () => {
  it.only('renders a message', () => {
    const msg = 'Click me'

    mount(PrimaryButton, {
      slots: { default: msg },
    })
      .get('button')
      .should('be.visible')
  })
})
