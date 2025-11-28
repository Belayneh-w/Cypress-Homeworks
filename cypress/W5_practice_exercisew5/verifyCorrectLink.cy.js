describe('verify navigation link', () => {
    it('checks navigation link points to correct location', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
       // cy.get('a[href="/shop"]').should('exist')
        cy.contains('a', "Shop").should('have.attr', "href", "/angularpractice/shop")
    });
    
});
