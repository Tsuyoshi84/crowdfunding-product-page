import { cy, context, it, beforeEach } from 'local-cypress'

context('Basic', () => {
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

    cy.contains('Mastercraft').should('exist')

    cy.get('[data-cy=back-project]')
      .click()
      .contains('Back this project')
      .should('exist')

    cy.get('[data-cy=reward-basic-info]').eq(1).click()

    cy.get('[data-cy=input-form]').contains('Enter your pledge').should('exist')

    cy.get('[name=pledge]')
      .should('have.value', 25)
      .type('{backspace}{backspace}')
      .type('1')
    cy.get('[data-cy=submit-button]').should('be.disabled')

    cy.get('[name=pledge]').type('{backspace}').type('100')
    cy.get('[data-cy=submit-button]').should('be.enabled').click()

    cy.get('[data-cy=complete-modal]').should('exist')
  })
})
