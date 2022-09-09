import { Project } from '@/models/project'

describe('Open project page', () => {
  let project: Project

  beforeEach(() => {
    cy.visit('/')

    cy.fixture<Project>('project').then((p) => {
      project = p
    })
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
      .should('contain.text', project.rewards[0].name)
      .should('contain.text', 'Pledge $25 or more')
      .should('contain.text', '101')
      .within(() => {
        cy.getBySel('select-reward-button')
          .should('be.enabled')
          .should('contain.text', 'Select Reward')
      })

    cy.getBySel('project-reward')
      .last()
      .should('contain.text', project.rewards[2].name)
      .should('contain.text', 'Pledge $200 or more')
      .should('contain.text', '0')
      .within(() => {
        cy.getBySel('select-reward-button')
          .should('be.disabled')
          .should('contain.text', 'Out of Stock')
      })
  })
})
