// cypress/e2e/duckduckgo.ts
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit {string}', (url: string) => {
  cy.visit('https://www.duckduckgo.com');
});

Then('I should see a search bar', () => {
  cy.get('input[type=text]')
    .should('have.attr', 'placeholder')
    .and('match', /Search without being tracked|Search privately/);
});

When('I visit a new url {string}', (url: string) => {
  cy.visit('https://docs.cypress.io');
  cy.get('body');

  cy.visit(url);
  cy.origin(url, () => {
    cy.get('body'); // all good

    const { f } = Cypress.require('/cypress/support/dummyModule.ts');
    f();
  });
});
