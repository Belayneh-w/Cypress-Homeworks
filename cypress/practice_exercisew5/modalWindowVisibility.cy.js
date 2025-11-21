describe('modal window visibilty test', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test when there is an uncaught exception
        return false
      })
    it('verifies window behavior', () => {
        cy.visit('https://demoqa.com/modal-dialogs')  // visit page
    //    cy.get('.modal-content').should('not.be.visible')//modal should not be  visible before clicking
        cy.get('.modal-content').should('not.exist')//modal should not be  visible before clicking
        cy.get('#showSmallModal').click()//click to open the modal
        cy.get('.modal-content').should('be.visible')//verify the small modal visible after clicking
        cy.get('#example-modal-sizes-title-sm').should('contain.text','Small Modal')
        cy.contains('button', 'Close')


    });
    
});
