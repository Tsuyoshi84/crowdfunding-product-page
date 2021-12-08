import { mount } from '@cypress/vue'
import { it, describe, cy } from 'local-cypress'
import ToggleMark from './ToggleMark.vue'
import ToggleMarkPreview from './ToggleMark.preview.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('ToggleMark', () => {
  it('preview', () => {
    mount(ToggleMarkPreview)
  })

  it('shows button', () => {
    mount(ToggleMark, {}).get('.outer-circle').should('be.visible')
  })
})
