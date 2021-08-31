export default class Login {
    typeEmail(email) {
        return cy.get('input[type="email"]').clear().type(email)
    }
    typePassword(password) {
        return cy.get('input[type="password"]').clear().type(password)
    }
    clickButtonLogin() {
        return  cy.get('body:nth-child(2) div:nth-child(2) div.small-container form:nth-child(1) > input:nth-child(6)')
                    .click()
    }
}