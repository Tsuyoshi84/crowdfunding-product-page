import { cy, context, it, beforeEach } from 'local-cypress'

context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('toggle bookmark button', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.get('[data-cy=bookmark-button]')
      .should('exist')
      .click()
      .contains('Bookmarked')
      .click()
      .contains('Bookmark')
  })

  it('basic nav', () => {
    cy.url().should('eq', 'http://localhost:3000/')

    cy.contains('Mastercraft').should('exist')

    cy.get('[data-cy=back-project]')
      .click()
      .contains('Back this project')
      .should('exist')

    cy.get('[data-cy=reward-basic-info]').first().click()

    cy.get('[data-cy=input-form]').contains('Enter your pledge').should('exist')
  })
})
