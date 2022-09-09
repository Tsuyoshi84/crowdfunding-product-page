import { Project } from '@/models/project'
import ProjectSummary from './ProjectSummary.vue'

describe('<ProjectSummary>', () => {
  beforeEach(() => {
    cy.fixture<Project>('project').then((project) => {
      cy.mount(ProjectSummary, { props: { project } })
    })
  })

  it('shows texts', () => {
    cy.getBySel('project-name')
      .should('contain.text', 'An awesome project')
      .should('be.visible')
    cy.getBySel('project-description')
      .should('contain.text', 'This is an awesome project')
      .should('be.visible')
  })
})
