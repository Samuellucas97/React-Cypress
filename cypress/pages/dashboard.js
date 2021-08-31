export default class Dashboard {
    clickAddEmployeeButton() {
        return cy.contains('Add Employee').click()
    }
}