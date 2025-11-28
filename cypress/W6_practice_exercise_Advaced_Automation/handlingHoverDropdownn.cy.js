// 2. Handling Dropdown with Hover and Submenu: Write a Cypress test script that
// handles a dropdown menu with a submenu that appears on hover.
// • Your test should:
// • Hover over the element that triggers the submenu.
// • Verify that the submenu is displayed.
// • Validate the content of the submenu (e.g., correct items are visible).
// Website: https://rahulshettyacademy.com/AutomationPractice/

describe('modal dialogs', () => {
    it('handling mouse Hover popups', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover').click()
      //  cy.get(".mouse-hover-content").should("be.visible")
        cy.get(".mouse-hover-content").should("exist")
        cy.get('.mouse-hover-content a').should("have.length", 2)
        cy.get('.mouse-hover-content a').should('contain', 'Top')
        cy.get('.mouse-hover-content a').should('contain', 'Reload')
     //   cy.get('.mouse-hover-content a').contains("Top").should('exist')
      //  cy.get('.mouse-hover-content a').contains("Reload").should('exist')
    });
    
});
