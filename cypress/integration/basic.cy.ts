import { cy, context, it, beforeEach } from 'local-cypress'
import { Project } from '../../src/models/project'

context('Basic', () => {
  const project: Partial<Project> = {
    name: 'Mastercraft Bamboo Monitor Riser',
    description:
      'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
    detail:
      'The Mastercraft Mamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.\n\nFeaturing artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('toggle bookmark button', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('[data-cy=bookmark-button]')
      .click()
      .contains('Bookmarked')
      .should('exist')
      .click()
      .contains('Bookmark')
      .should('exist')
  })

  it('back project', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('[data-cy=project-name]').should('exist').contains(project.name)
    cy.get('[data-cy=project-description]')
      .should('exist')
      .contains(project.description)

    cy.get('[data-cy=back-project]')
      .should('exist')
      .contains('Back this project')
      .click()

    cy.get('[data-cy=project-modal]').should('be.visible')
    cy.get('[data-cy=input-form]').should('not.exist')

    cy.get('[data-cy=reward-basic-info]').eq(1).click()

    cy.get('[data-cy=input-form]').contains('Enter your pledge').should('exist')

    cy.get('[name=pledge]')
      .should('have.value', 25)
      .type('{backspace}{backspace}')
      .type('1')
    cy.get('[data-cy=submit-button]').should('be.disabled')

    cy.get('[name=pledge]').type('{backspace}').type('100')
    cy.get('[data-cy=submit-button]').should('be.enabled').click()

    cy.get('[data-cy=complete-modal]').should('be.visible')
  })
})