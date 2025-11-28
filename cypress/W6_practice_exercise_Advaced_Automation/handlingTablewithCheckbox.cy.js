// 4. Handling Table with Checkboxes: Write a Cypress test script that interacts
// with a web table containing checkboxes.
// • Your test should:
// • Locate rows with checkboxes.
// • Select (check) and deselect some checkboxes.
// • Verify that the correct rows are selected.
// • Validate any change in the UI after interacting with the checkboxes.
// Website: https://vinothqaacademy.com/webtable/

describe('handling table with checkbox', () => {
    it('selects and deselects rows with checkbox', () => {
        cy.visit("https://vinothqaacademy.com/webtable/")
        // locat a row
        cy.get("table tbody tr").as("rows")
        //confim at least 1 checkbox availabilty
        cy.get("@rows").find("input[type='checkbox']").should('have.length.at.least', 1)
        //select specific row
        const rowsToSelect = ["Design","Toronto","Chris Evans"]
        rowsToSelect.forEach((label)=>{
            cy.contains("td",label).parent('tr').find('input[type="checkbox').check().should("be.checked")
        })
        //deselect a row
        const rowsToDeselect= ["Toronto"]
        rowsToDeselect.forEach((label)=>{
            cy.contains("td",label).parent('tr').find('input[type="checkbox').uncheck().should("not.be.checked")
        })  
    });
    
});
