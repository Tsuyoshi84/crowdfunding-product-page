import { ProjectReward as Reward } from '@/models/project'
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

describe('<ProjectReward>', () => {
  beforeEach(() => {
    cy.mount(ProjectReward, { props: { reward } })
  })

  it('shows texts', () => {
    cy.getBySel('name').contains(reward.name).should('be.visible')
    cy.getBySel('pledge').contains('Pledge $3 or more').should('be.visible')
    cy.getBySel('detail').contains(reward.detail).should('be.visible')
    cy.getBySel('number').contains(reward.stock).should('be.visible')
  })
})
