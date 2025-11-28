// 3. Handling Dynamic Web Table with Pagination: Write a Cypress test script for
// a dynamic web table with rows, columns, and pagination.
// • Your test should:
// • Search or filter the table for a specific item (e.g., "Rice").
// • Validate that the correct row and columns are displayed.
// 2 of 3
// • Handle pagination by navigating to the next page(s) until the item is
// found.
// • Verify the content of the selected row (e.g., price, discount).
// Website: https://rahulshettyacademy.com/seleniumPractise/#/offers

describe('handle pagination web table', () => {
    it('verify content of selected row', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get('table').within(()=>{
            cy.get("tr").should('have.length',6)
            cy.get('tbody tr').each(($row)=>{
                cy.wrap($row).find('td').eq(0).invoke('text').then((text)=>{
                    cy.log(`Row contains:${text}`)
                })
            })
        })
        cy.get("table tbody tr").eq(2).find("td").eq(0).should("contain.text", "Strawberry")
        cy.get("table tbody tr").eq(1).find("td").eq(0).should("contain.text", "Tomato")
        cy.get("table tbody tr").eq(7).find("td").eq(0).should("contain.text", "Mango")
    });
    
});
