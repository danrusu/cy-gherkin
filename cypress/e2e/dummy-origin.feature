Feature: DummyOrigin
  # Scenario: visiting the docs.cypress.io
  #   When I visit "https://docs.cypress.io/"

  # Scenario: visiting a different origin - testutils.com
  #   And I visit "https://testutils.com"


  Scenario: visiting 2 origins
    When I visit "https://docs.cypress.io/"
    # And I visit "https://testutils.com"  # fails due to a new origin
    And I visit a new origin "https://testutils.com"