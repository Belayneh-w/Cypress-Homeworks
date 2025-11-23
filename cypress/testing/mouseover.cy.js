describe('mouseover', () => {
    it('mouseover action', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get(".mouse-hover-content").invoke('show').should('be.visible')
        cy.contains('Top').should('be.visible')
        
    });
    it.only('Automate tooltips', () => {
        cy.visit("https://practice.expandtesting.com/tooltips/")
        cy.get('#btn1').invoke("show").should("be.visible")
    });
    
    
});
