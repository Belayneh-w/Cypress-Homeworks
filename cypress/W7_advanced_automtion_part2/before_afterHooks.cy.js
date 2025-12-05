// Authentication Flow Using Before and After Hooks: Create a Cypress test
// script to validate the login flow. Use the before hook to navigate to the login
// page, enter valid credentials, and authenticate by executing tests. After all tests
// complete, use the after hook to log out and ensure the session is properly
// terminated. This demonstrates effective session management by allowing
// tests to share an authenticated state while maintaining clean closure.
// Website: https://evangadi.com/auth/login

describe('before sand after hooks', () => {
    
        before(()=>{
        cy.visit("https://evangadi.com/auth/login")
        cy.get('input[name="email"]').type("yirgabelay@gmail.com")
        cy.get('input[name="password"]').type("#1melkamsir")
        cy.get('button[type="submit"]').click()
        })
    it('autenticates with before and after hooks', () => {
        cy.contains('My Courses').should("be.visible")
        
    });
        // after(()=>{
        //     cy.get("._hamburger-menu--icon_nm1of_221").click()
        //     cy.get("._logout--icon_nm1of_235").click()
        // })
    
});
