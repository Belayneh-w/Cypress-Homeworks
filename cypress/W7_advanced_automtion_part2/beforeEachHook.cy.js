// Shopping Cart State Management with BeforeEach Hook: Design a Cypress
// test script to validate the bookstore’s cart functionality. Use the beforeEach
// hook to navigate to the homepage and reset the cart to an empty state before
// each test.
// • First, verify the cart begins empty (item count = 0).
// • Next, add a book and confirm the item count updates correctly. This
// ensures consistent state management and reliable cart validation.
// Website: https://practice.expandtesting.com/bookstore


describe('state management with beforEach', () => {
     beforeEach(()=>{
        cy.visit("https://practice.expandtesting.com/bookstore")
        cy.get('.nav-link.position-relative.d-flex.align-items-center').click()
        cy.get(".text-center").should("contain", "No items in carts")
        cy.contains("No items in carts").should("be.visible")
        cy.contains("All Books").click()
 
        })
    //verify that the cart is empty
    it('should start with an empty cart', () => {
        cy.get('.nav-link.position-relative.d-flex.align-items-center').click()
        cy.contains("No items in carts").should("be.visible")
    });
      
    //verify the cart Adds and update the item
    it('should add a book and update cart count', () => {
        //cy.contains("Add To Cart").eq(2).click()
        cy.get('.btn.btn-expand.w-100.mt-1.mb-2.ms-1.me-1').eq(2).click()
        cy.get('.nav-link.position-relative.d-flex.align-items-center').click()
        cy.contains("No items in carts").should("not.exist")
        cy.get('table tbody tr').should("have.length", 1)
    });
    
});
