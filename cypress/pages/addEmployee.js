export default class AddEmployee {
    typeFirstName(firstName) {
        return cy.get("#firstName").type(firstName)
    }
    typeLastName(lastName) {
        return cy.get("#lastName").type(lastName)
    }
    typeEmail(email) {
        return cy.get("#email").type(email)
    }
    typeSalary(salary){
        return cy.get("#salary").type(salary)
    
    }
    typeDate(date) {
        return cy.get("#date").type(date)   
    }
}