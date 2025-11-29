describe('check multiple checkboxs ', () => {
    it('virifies multiple checkboxs checked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        ////check multiple checkboxs by value
        cy.get('input[type="checkbox"]').check(['option1', 'option2']).should('be.checked')
        
       ////check multiple checkboxs by id

      // cy.get('#checkBoxOption1, #checkBoxOption2').check().should('be.checked')
        
      ////uncheck all checkboxs
        
//cy.get('#checkBoxOption1, #checkBoxOption2').uncheck().should('not.be.checked')
    });
    
});
