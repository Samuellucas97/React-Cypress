import Dashboard from '../pages/dashboard'
import AddEmployee from '../pages/addEmployee'

describe('Login into system and add a new employee', () => {
    before('Sign in with correct credentials', ()=> {
        const email = 'admin@example.com'
        const password = 'qwerty'
        cy.Login(email, password)
    })
    it('add new employee', ()=> {
        const dashboardPage = new Dashboard()
        const addEmployeePage = new AddEmployee()

        const firstName = 'Unknow'
        const lastName = 'Desconhecido'
        const email = 'desconhecido@gmail.com'
        const salary = 10000
        const date = '1995-01-12'

        dashboardPage.clickAddEmployeeButton()
        addEmployeePage.typeFirstName(firstName)
        addEmployeePage.typeLastName(lastName)
        addEmployeePage.typeEmail(email)
        addEmployeePage.typeSalary(salary)
        addEmployeePage.typeDate(date)

        cy.get('input[value="Add"]').should("be.visible").click()

        cy.contains(firstName).should("be.visible")
    })
})