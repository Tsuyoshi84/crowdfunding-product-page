import { Cypress, cy } from 'local-cypress'

// Define custom commands here

/**
 * Get one or more elements that has given text as data-test attribute value,
 *
 * @param selector The data-test attribute value to match
 * @param args The arguments to pass to cy.get()
 * @returns HTML elements
 */
function getBySel(selector: string, args?: Parameters<typeof cy.get>[1]) {
  return cy.get(`[data-test=${selector}]`, args)
}

/**
 * Get one or more elements that starts with given text as data-test attribute value,
 * @param selector The data-test attribute value that starts with to match
 * @param args The arguments to pass to cy.get()
 * @returns HTML elements
 */
function getBySelLike(selector: string, args?: Parameters<typeof cy.get>[1]) {
  return cy.get(`[data-test*=${selector}]`, args)
}

// Add custom commands to Cypress
// @ts-ignore
Cypress.Commands.add('getBySel', getBySel)
// @ts-ignore
Cypress.Commands.add('getBySelLike', getBySelLike)

// Add new command to the existing Cypress interface
declare global {
  namespace Cypress {
    type Greeting = {
      greeting: string
      name: string
    }

    interface Chainable {
      // @ts-ignore
      getBySel: typeof getBySel
      // @ts-ignore
      getBySelLike: typeof getBySelLike
    }
  }
}
