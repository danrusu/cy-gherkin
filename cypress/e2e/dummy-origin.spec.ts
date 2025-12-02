const URL1 = 'https://docs.cypress.io/';
const URL2 = 'https://testutils.com';

// import { f } from '../support/dummyModule';

describe('Cross origin test', () => {
  it('can require external modules', () => {
    cy.visit(URL1);
    cy.get('body');

    // new origin
    cy.visit(URL2);
    cy.origin(URL2, () => {
      cy.get('body'); // all good

      const { f } = Cypress.require('/cypress/support/dummyModule');
      // const { f } = Cypress.require('../support/dummyModule');
      f();
    });
  });
});
