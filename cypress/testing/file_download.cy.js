describe('test suit for file download', () => {
    it('test fiel downlaod', () => {
        cy.visit("https://commitquality.com/practice-file-download/")
        cy.get('button').click()
        cy.readFile('cypress/downloads/dummy_file.txt').should("exist")

    });
    
});
