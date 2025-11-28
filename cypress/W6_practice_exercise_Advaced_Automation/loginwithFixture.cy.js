// 7. Login Using Fixture Data: Write a Cypress test script to log in using fixture
// data.
// • Your test should:
// • Use a fixture file containing valid username and password.
// • Load the fixture data in the test.
// • Enter the username and password into the login form.
// • Click the login button.
// • Verify successful login by checking the redirected URL or page content.
// Website: https://rahulshettyacademy.com/loginpagePractise/

describe('Login Using Fixture Data', () => {
    it('Verify successful login by checking the redirected', () => {
        cy.fixture('loginDatas').then((data)=>{
            cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
            cy.get('#username').should('be.enabled').type(data.username)
            cy.get('#password').should('be.enabled').type(data.password)
            cy.get('#signInBtn').click()
            
            cy.url().should('include','shop')
        })

    });
    
});
