import { mount } from '@cypress/vue'
import { Project } from '@/models/project'
import ProjectSummary from './ProjectSummary.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

const project: Project = {
  id: 1,
  name: 'An awesome project',
  description: 'This is an awesome project',
  detail: 'This is an awesome project',
  bookmarked: false,
  targetAmount: 10000,
  currentAmount: 2000,
  numOfBuckers: 2,
  daysLeft: 10,
  rewards: [
    {
      id: 1,
      name: 'Pen',
      detail: 'An awesome pen',
      stock: 2,
      pledge: 3,
    },
  ],
}

describe('ProjectSummary', () => {
  beforeEach(() => {
    mount(ProjectSummary, { props: { project } })
  })

  it('shows texts', () => {
    cy.get('.name').contains(project.name).should('be.visible')
    cy.get('.description').contains(project.description).should('be.visible')
  })
})
