import { Project } from '@/models/project'
import ProjectSummary from './ProjectSummary.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('ProjectSummary', () => {
  beforeEach(() => {
    cy.fixture<Project>('project').then((project) => {
      cy.mount(ProjectSummary, { props: { project } })
    })
  })

  it('shows texts', () => {
    cy.getBySel('project-name')
      .contains('An awesome project')
      .should('be.visible')
    cy.getBySel('project-description')
      .contains('This is an awesome project')
      .should('be.visible')
  })
})
