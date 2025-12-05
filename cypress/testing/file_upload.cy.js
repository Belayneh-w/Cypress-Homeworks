describe('test suit for single upload', () => {
    it.skip('single file upload', () => {
        cy.visit("https://practice-automation.com/file-upload")
        cy.get('#file-upload').attachFile("zebra.jpg")
        cy.get('#upload-btn').click()
        cy.get('.wpcf7-response-output').should("have.text", "Thank you for your message. It has been sent.")
    });
    it.skip('multiple file upload', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get('#filesToUpload').attachFile(["zebra.jpg","bees.jpg"])
        cy.get('#fileList > :nth-child(1)').should("contain","zebra.jpg")
        cy.get('#fileList > :nth-child(2)').should("contain","bees.jpg")
    });
    it('drag and drop file upload', () => {
        cy.visit("https://css-tricks.com/examples/DragAndDropFileUploading/")
        cy.on('uncaught:exception', (err) => {
            // return false to prevent Cypress from failing the test
            return false;
          });
        cy.get('.box__input').attachFile("zebra.jpg",{subjectType:"drag-n-drop"})
    //    cy.get('.box__input').selectFile("cypress/fixtures/zebra.jpg",{action:"drag-drop"})
        cy.get('label').should("contain", "zebra.jpg")
       // cy.get('#filesToUpload').attachFile(["zebra.jpg","bees.jpg"])
    })
    
    
});
