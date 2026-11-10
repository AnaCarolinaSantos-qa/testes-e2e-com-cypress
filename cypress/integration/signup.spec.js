/// <reference path="../support/commands.d.ts" />

it('shows the confirmation prompt after a signup request', () => {
  const faker = require('faker')
  const emailAddress = `signup-${faker.datatype.uuid()}@example.test`
  const password = Cypress.env('USER_PASSWORD')

  cy.intercept('POST', '**/signup', {
    statusCode: 200,
    body: {}
  }).as('signup')

  cy.intercept('GET', '**/notes').as('getNotes')

  cy.fillSignupFormAndSubmit(emailAddress, password)
  cy.wait('@signup')
  cy.get('#confirmationCode').should('be.visible')
})
