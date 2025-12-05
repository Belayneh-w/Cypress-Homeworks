import LoginPage from "../support/LoginPage";

describe('login automation using pom', () => {
  const loginPage = new LoginPage();
  it('logs in successfully using Page Object Model', () => {


    loginPage.login('practice', 'SuperSecretPassword!');

    cy.contains('Welcome').should('be.visible');
  });
});
