import { Project } from '@/models/project'
import ProjectAbout from './ProjectAbout.vue'

describe('<ProjectAbout>', () => {
  beforeEach(() => {
    cy.fixture<Project>('project').then((project) => {
      cy.mount(ProjectAbout, { props: { project } })
    })
  })

  it('shows texts', () => {
    cy.getBySel('about')
      .should('contain.text', 'About this project')
      .should('be.visible')

    cy.getBySel('detail')
      .should('contain.text', 'This is an awesome project')
      .should('be.visible')
  })
})
