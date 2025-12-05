// 5. Cypress Retries for Flaky Tests: Create a test suite with an intentionally flaky
// test (for example, waiting for a delayed element to appear). Configure Cypress
// to use the built-in test retries feature via the cypress.config.js file. Run the test
// to confirm that Cypress automatically retries failed attempts before marking
// the test as failed. This validates the ability to handle intermittent or timingrelated issues.
// Website: https://practice.expandtesting.com/login
describe.only('flaky test with retries', () => {
    it('intentionaly flaky with short time delay', () => {
        cy.visit("https://practice.expandtesting.com/login")
      //  cy.contains('Login',{timeout:50}).should("be.visible")
        cy.get('button[type="submit"]',{timeout:50}).should("be.visible")
       // cy.get("#submit-login",{timeout:50}).should("be.visible")
    });
    
});
