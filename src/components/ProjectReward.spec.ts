import { mount } from '@cypress/vue'
import { ProjectReward as Reward } from '@/models/project-reward'
import ProjectReward from './ProjectReward.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

const reward: Reward = {
  id: 1,
  name: 'Pen',
  detail: 'An awesome pen',
  stock: 101,
  pledge: 3,
}

describe('ProjectReward', () => {
  beforeEach(() => {
    mount(ProjectReward, { props: { reward } })
  })

  it('shows texts', () => {
    cy.get('.name').contains(reward.name).should('be.visible')
    cy.get('.pledge').contains('Pledge $3 or more').should('be.visible')
    cy.get('.detail').contains(reward.detail).should('be.visible')
    cy.get('.number').contains(reward.stock).should('be.visible')
  })
})
