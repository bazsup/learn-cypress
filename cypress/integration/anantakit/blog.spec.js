/// <reference types="cypress" />

describe('Blog', () => {
  it('should show list of blogs', () => {
    cy.visit('https://anantakit.space/blog/')

    cy.get('.ant-spin-container > .ant-row')
      .invoke('children')
      .should('have.length', 5)

    cy.get('.ant-spin-container > .ant-row')
      .invoke('children')
      .first()
      .should('contain', 'DEVOPS#2')
      

  })
});
