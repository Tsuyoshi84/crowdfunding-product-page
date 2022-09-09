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
    cy.url().should('eq', 'http://localhost:5173/')

    cy.getBySel('bookmark-button')
      .click()
      .should('contain.text', 'Bookmarked')
      .should('exist')
      .click()
      .should('contain.text', 'Bookmark')
      .should('exist')
  })

  it('back project', () => {
    cy.url().should('eq', 'http://localhost:5173/')

    cy.screenshot('01-project-page', { capture: 'viewport', overwrite: true })
    cy.getBySel('project-name')
      .should('exist')
      .should('contain.text', project.name!)
    cy.get('[data-test=project-description]')
      .should('exist')
      .should('contain.text', project.description!)

    cy.getBySel('back-project')
      .should('exist')
      .should('contain.text', 'Back this project')
      .click()
    cy.screenshot('02-show-project-modal', {
      capture: 'viewport',
      overwrite: true,
    })

    cy.getBySel('project-modal').should('be.visible')
    cy.getBySel('input-form').should('not.exist')

    cy.getBySel('reward-basic-info').eq(1).click()

    cy.getBySel('input-form')
      .should('contain.text', 'Enter your pledge')
      .should('exist')

    cy.get('[name=pledge]')
      .should('have.value', 25)
      .type('{backspace}{backspace}')
      .type('1')
    cy.get('[data-test=submit-button]').should('be.disabled')

    cy.get('[name=pledge]').type('{backspace}').type('100')
    cy.getBySel('submit-button').should('be.enabled').click()

    cy.screenshot('03-pledge-success', { capture: 'viewport', overwrite: true })
    cy.getBySel('complete-modal').should('be.visible')
    cy.getBySel('complete-modal-close-button').should('be.visible').click()
    cy.getBySel('complete-modal').should('not.be.visible')
  })
})
