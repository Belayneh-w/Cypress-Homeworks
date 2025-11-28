// 5. Handling Button Inside an iFrame: Write a Cypress test script that interacts
// with a button inside an iframe.
// • Your test should:
// • Switch context to the iframe.
// • Click on the button inside the iframe.
// • Verify that a success message is displayed inside the iframe after
// clicking.
// Website: https://rahulshettyacademy.com/AutomationPractice/

describe('Handling Button Inside an iFrame', () => {
    it('clicks iFrame button to verify success message', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //get iFrame body
        cy.frameLoaded('#courses-iframe')
        cy.iframe().contains('a', 'Mentorship').click()
        cy.iframe().contains('a', 'Mentorship').should("be.visible")
        cy.get('#name').type("learn iFrame")

    });
    
});
