// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import '../../src/setup'

// Import commands.js using ES2015 syntax:
import './commands'

import { mount } from 'cypress/vue'

Cypress.Commands.add('mount', (component, options = {}) => {
	// Setup options object
	options.global = options.global || {}
	options.global.stubs = options.global.stubs || {}
	// options.global.stubs['transition'] = false
	options.global.components = options.global.components || {}
	options.global.plugins = options.global.plugins || []

	/* Add any global plugins */
	// options.global.plugins.push({
	//   install(app) {
	//     app.use(MyPlugin);
	//   },
	// });

	/* Add any global components */
	// options.global.components['Button'] = Button;

	return mount(component, options)
})

// Example use:
// cy.mount(MyComponent)
