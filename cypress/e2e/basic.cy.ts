import { Project } from '@/models/project'

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

  it('should have the right URL', () => {
    cy.url().should('eq', 'http://localhost:5173/')
  })

  it('should change bookmark button texts when clicks', () => {
    cy.getBySel('bookmark-button')
      .click()
      .should('be.visible')
      .should('contain.text', 'Bookmarked')
      .click()
      .should('be.visible')
      .should('contain.text', 'Bookmark')
  })

  it('should not show modal', () => {
    cy.getBySel('project-modal').should('not.be.visible')
    cy.getBySel('complete-modal').should('not.be.visible')
  })

  it('should show project info', () => {
    cy.getBySel('project-status')
      .should('contain.text', '$89,914')
      .should('contain.text', 'of $100,000 backed')
      .should('contain.text', '5,007')
      .should('contain.text', '56')

    cy.getBySel('project-reward')
      .should('have.length', 3)
      .first()
      .should('contain.text', 'Bamboo Stand')
      .should('contain.text', 'Pledge $25 or more')
      .should('contain.text', '101')
      .within(() => {
        cy.getBySel('select-reward-button')
          .should('be.enabled')
          .should('contain.text', 'Select Reward')
      })

    cy.getBySel('project-reward')
      .last()
      .should('contain.text', 'Mahogany Special Edition')
      .should('contain.text', 'Pledge $200 or more')
      .should('contain.text', '0')
      .within(() => {
        cy.getBySel('select-reward-button')
          .should('be.disabled')
          .should('contain.text', 'Out of Stock')
      })
  })

  it('should show modals after backing', () => {
    cy.screenshot('01-project-page', { capture: 'viewport', overwrite: true })

    cy.getBySel('project-name')
      .should('be.visible')
      .should('contain.text', project.name!)

    cy.get('[data-test=project-description]')
      .should('be.visible')
      .should('contain.text', project.description!)

    cy.getBySel('back-project')
      .should('be.visible')
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
      .should('be.visible')

    cy.getBySel('pledge-input')
      .should('have.value', 25)
      .type('{backspace}{backspace}')
      .type('1')
    cy.getBySel('submit-button').contains('Continue').should('be.disabled')

    cy.getBySel('pledge-input').type('{backspace}').type('100')
    cy.getBySel('submit-button').should('be.enabled').click()

    cy.screenshot('03-pledge-success', { capture: 'viewport', overwrite: true })
    cy.getBySel('project-modal').should('not.be.visible')
    cy.getBySel('complete-modal').should('be.visible')
    cy.getBySel('complete-modal-close-button').should('be.visible').click()
    cy.getBySel('complete-modal').should('not.be.visible')
  })
})
