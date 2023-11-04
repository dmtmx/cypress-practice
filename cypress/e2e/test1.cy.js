/// <reference type="cypress" />

it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('tommy hoang')
    cy.contains('Google Search').click()
})