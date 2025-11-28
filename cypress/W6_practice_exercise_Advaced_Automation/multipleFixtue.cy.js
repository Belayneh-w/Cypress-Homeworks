// 8. Login with Multiple Users from Fixture: Write a Cypress test script that
// performs login using multiple sets of credentials stored in a fixture file.
// • Your test should:
// • Loop through each user in the fixture data.
// • Attempt login with the credentials.
// • Verify that login is successful (by checking URL or page content).
// • Optionally, log out after each successful login before testing the next
// user.
// Website: https://rahulshettyacademy.com/loginpagePractise/

describe('', () => {
    it('performs login for each user in the fixture', () => {

        cy.fixture('loginDatas').then((loginDatas) => {
    
        loginDatas.forEach((user) => {
       // Visit login page for each user
            cy.visit('https://rahulshettyacademy.com/loginpagePractise/')
    
            cy.get('#username').should('be.visible').and('not.be.disabled').clear().type(user.username)
    
            cy.get('#password').should('be.visible').and('not.be.disabled').clear().type(user.password)
     // Click login
            cy.get('#signInBtn').click()
    
            cy.url().should('include', 'shop')
            cy.contains('h1', 'Shop Name').should('be.visible')
    
     
        })
    
      })
     
})
})
