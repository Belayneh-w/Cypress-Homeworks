describe('locators', () => {
    it('locate an element with id', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(".form-control").eq(0).type("Belay") // class selector
        cy.get("input[name='email']").type("belay@gmail.com") //attribute selector
        cy.get('#exampleInputPassword1').type("!Belay") // id selector 
        cy.get('.btn.btn-success').click()
    });
    
});
