import LoginPage from "../support/LoginPage";

describe('login automation using pom', () => {
  const loginPage = new LoginPage();
  it('logs in successfully using Page Object Model', () => {


    loginPage.login('practice', 'SuperSecretPassword!');

    // Assertion: verify successful login
    // Option A: Check URL redirection
    cy.url().should('include', '/profile');

    // Option B: Check for dashboard/profile element
    cy.contains('Welcome').should('be.visible');
  });
});
