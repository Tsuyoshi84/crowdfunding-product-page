import { mount } from '@cypress/vue'
import BookmarkButton from './BookmarkButton.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('BookmarkButton', () => {
  it.only('renders a message', () => {
    mount(BookmarkButton, {}).get('button').should('be.visible')
  })
})
