// cypress/e2e/duckduckgo.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit {string}', (url: string) => {
  cy.visit(url);
  cy.get('body').should('exist');
});

Then('I should see a search bar', () => {
  cy.get('input[type=text]')
    .should('have.attr', 'placeholder')
    .and('match', /Search without being tracked|Search privately/);
});

When('I visit a new origin {string}', (url: string) => {
  cy.visit(url);
  cy.origin(url, () => {
    cy.get('body'); // all good
    console.log(Cypress.require);

    // const chai = Cypress.require('chai');

    const { f } = Cypress.require('/cypress/support/dummyModule');
    f();
  });
});
