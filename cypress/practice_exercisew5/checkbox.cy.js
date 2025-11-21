describe('it checks unchecks a checkbox', () => {
    it('verify checkbox', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')
      //  check
        cy.get('input[type="radio"][value="radio2"]').check().should('be.checked')
        cy.get('input[type="checkbox"][value="option1"]').check().should("be.checked")
        //uncheck
        cy.get('input[type="checkbox"][value="option1"]').uncheck().should("not.be.checked")
    });
    
});
describe('disable checkbox', () => {
    it.only('verifies checkbox is disabledor disabled', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[type="checkbox"]').should('be.enabled')
        //disable the checkbox   
         cy.get('input[type="checkbox"][value="option2"]').invoke('attr', 'disabled', true)
    
        //verify it is now disabled
        cy.get('input[type="checkbox"][value="option2"]').should('be.disabled')
    });
    
});
