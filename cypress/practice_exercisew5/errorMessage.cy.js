describe('checks error message', () => {

              ////use invalid credentials
    it('verifies error message exists', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type("Belay")
        cy.get('#password').type("!Belay")
        cy.get('#submit').click()
        cy.get('#error').should("have.text","Your username is invalid!")
        

    });
              //// use valid credentials
    it.only('valid credentials', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    
        cy.get('#username').type("student")
        cy.get('#password').type("Password123")
        cy.get('#submit').click()
        cy.get('.post-title').should("have.text","Logged In Successfully")
    
    });
    
    
});
