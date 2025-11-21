describe('visit Business Registration Form ', () => {
    it('fills and submit Business registration form', () => {

        // visit address and open form
        cy.visit('https://form.jotform.com/242354571450554')

        //fill form fields
        cy.get('#first_4').type('James')
        cy.get('#last_4').type('Bond')
        cy.get('#input_6').type('Bond Company')
        cy.get('#input_12_full').type('(000) 000 0000')
        cy. get('#input_5').type('jbond@example.com')
        cy.get('#input_3_addr_line1').type('123 London Street')
        cy.get('#input_3_addr_line2').type('Apt 2')
        cy.get('#input_3_city').type('London')
        cy.get('#input_3_state').type('Maryland')
        cy.get('#input_3_postal').type('20902')
        cy.get('#input_11').select('Store')
        cy.get('#input_8').type('This is a sample text')
        
        //submit the form
        cy.get('#input_14').click()

    });
    
});
