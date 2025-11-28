Feature: DummyOrigin
  Scenario: visiting the frontpage
    When I visit "https://docs.cypress.io/"
    And I visit a new url "https://testutils.com"

