import { mount } from '@cypress/vue'
import { Project } from '@/models/project'
import { it, describe, cy } from 'local-cypress'
import ProjectAbout from './ProjectAbout.vue'
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

describe('ProjectAbout', () => {
  beforeEach(() => {
    mount(ProjectAbout, { props: { project } })
  })

  it('shows texts', () => {
    cy.get('.about').contains('About this project').should('be.visible')
    cy.get('.detail').contains(project.detail).should('be.visible')
  })
})
