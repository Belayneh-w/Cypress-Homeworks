// 6. Switching Between Main Page and iFrame: Write a Cypress test script that
// demonstrates switching between main page elements and iframe elements.
// • Your test should:
// 3 of 3
// • Interact with a UI element on the main page.
// • Switch into the iframe and interact with elements inside it.
// • Switch back to the main page and continue interacting with main page
// elements.
// Website: https://rahulshettyacademy.com/AutomationPractice/

describe('switching between Main Page and iFame', () => {
    it('interacts between main page and ifame', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //check a radio on main page
        cy.get('[for="radio2"] > .radioButton').check()
        cy.get('[for="radio2"] > .radioButton').should('be.checked')

        //switch to the iFrame
    
    cy.frameLoaded('#courses-iframe')

   
    // // verify JOIN NOW link has an href and click it
     // cy.iframe().as('iframeBody')
    // cy.get('@iframeBody').contains('a', 'JOIN NOW').should('have.attr', 'href').and('include', 'sign_up')
    // cy.get('@iframeBody').contains('a', 'JOIN NOW').click()

    cy.iframe().contains('a', 'JOIN NOW')
    .should('have.attr', 'href').and('include', 'sign_up')
    cy.iframe().contains('a', 'JOIN NOW').click()
  
    //back to main page
    cy.get('#name').type("Belay")
    });
    
});
