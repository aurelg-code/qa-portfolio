describe('Connexion SauceDemo', () => {
  it('TC01 - Connexion réussie avec identifiants valides', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory.html')
})
  it('TC02 - Connexion refusée avec mauvais mot de passe', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('mauvais_mdp')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'do not match any user')
  })
  it('TC04 - Connexion refusée avec utilisateur bloqué', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should('contain', 'locked out')
  })
})
