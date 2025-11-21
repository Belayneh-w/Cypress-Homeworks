describe('static dropdown selection', () => {
    it('verifies the selected dropdown from static list', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       //select from by value
        cy.get('select').select('option2')
        cy.get('select').should('have.value','option2')
          //select from by visible Text
        cy.get('select').select('Option3')
        cy.get('select option:selected').should('contain.text', "Option3")
    });

});

describe('dynamic dropdown selection', () => {
    it.only('verifies the selected dropdown from dynamic list', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type("New")
     //   cy.wait(500)
        cy.get('.ui-menu-item div').each(($el, i, $li)=>{
            if($el.text().trim() == "New Zealand"){
           //     cy.log($el.text())
        cy.wrap( $el).click()
            }
        })
        cy.get("#autocomplete").should("have.value", "New Zealand")

    });
    
});
