import { Project } from '@/models/project'
import ProjectAbout from './ProjectAbout.vue'
import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

describe('ProjectAbout', () => {
  beforeEach(() => {
    cy.fixture<Project>('project').then((project) => {
      cy.mount(ProjectAbout, { props: { project } })
    })
  })

  it('shows texts', () => {
    cy.getBySel('about').contains('About this project').should('be.visible')
    cy.getBySel('detail')
      .contains('This is an awesome project')
      .should('be.visible')
  })
})
