import Login from '../pages/login'

Cypress.Commands.add('Login', (email, password) => {
    const login = new Login()

    cy.visit("/")
    login.typeEmail(email)
    login.typePassword(password)
    login.clickButtonLogin()

    // cy.title().should("eq", "CRUD App")
    // cy.location('protocol').should('eq', 'https:')
    
    // cy.get('input[type="email"]').clear().type(email)
    // cy.get('input[type="password"]').clear().type(password)
    // cy.get('body:nth-child(2) div:nth-child(2) div.small-container form:nth-child(1) > input:nth-child(6)')
    //     .click()
})
