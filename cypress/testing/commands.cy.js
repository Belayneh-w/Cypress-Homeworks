describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
        cy.get('.products').find('.product').should('have.length', 30)
        cy.get('.search-keyword').type('banana').should('be.visible')
    });
    
});
