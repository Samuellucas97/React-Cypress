describe('Login into system', () => {
    it('Sign in with correct credentials', ()=> {
        const email = 'admin@example.com'
        const password = 'qwerty'
        cy.Login(email, password)
        cy.contains('Logout').should('be.visible')
    })
})