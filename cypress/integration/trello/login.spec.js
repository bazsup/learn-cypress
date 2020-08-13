/// <reference types="cypress" />

describe('Login', () => {
  it('should welcome text', () => {
    cy.visit('https://trello.com/')

    cy.get('h1')
      .should('be.visible')
      
    cy.get('h1')
      .invoke('text', )
      .and('equal', 'Trello lets you work more collaboratively and get more done.')
  })

  it('should login fail when input wrong user & password', () => {
    cy.visit('https://trello.com/')

    // redirect to login page
    cy.get('.btn-link')
      .click()

    const invalidUser = 'ava@123.com'
    // input email
    cy.get('#user')
      .type(invalidUser)
    
    const invalidPassword = '1234'
    // input password
    cy.get('#password')
      .type(invalidPassword)

    // click login button
    cy.get('#login')
      .click()

    cy.get('#error > .error-message')
      .should('be.visible')
      .and('contain', `There isn't an account for this email`)

    cy.get('.layout-twothirds-center')
      .screenshot('login fail layout')
  })
});
