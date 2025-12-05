
class LoginPage {

    visit() {
    cy.visit('https://practice.expandtesting.com/login');
    }

    enterUsername(username) {

    cy.get('#username').type(username)
    }
    enterPassword(password) {
    cy.get('#password').type(password);
    }

    submit() {
    cy.get('button[type="submit"]').click();
    }


    login(username, password) {
    this.visit();
    this.enterUsername(username);
    this.enterPassword(password);
    this.submit();
    }
}
export default LoginPage

