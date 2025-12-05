// File Upload and Download Functionality Testing: Write Cypress tests for file
// operations:
// • Upload: Configure Cypress to support file uploads, upload a sample file (e.g.,
// example.jpg), and confirm success with a generated link or confirmation
// message.
// • Download: Trigger a file download and verify that it exists locally.
// This strengthens skills in handling file-driven features in automation.
// Upload Website: https://practice-automation.com/file-upload/
// Download Website: https://practice-automation.com/file-download/

//Ans
//setting up for file upload
// install and configure cypress-fiel-upload
//step-1 install
//npm install --save-Dev cypress-file-upload
//step-2 import it in cypress support file
//in cypress/support/e2e.js
//import 'cypress-file-upload'
//code example

describe('file Upload and download', () => {
    it.skip('uploads a file', () => {
        cy.visit("https://practice-automation.com/file-upload/")
        cy.get('#file-upload').attachFile("zebra.jpg")
        cy.get('#upload-btn').click()
        cy.get('.wpcf7-response-output').should("have.text","Thank you for your message. It has been sent.")
    });

    it('downloads file', () => {
    cy.visit("https://practice-automation.com/file-download/")
    cy.get(':nth-child(3) > .link-template-default > .card-body > .media > div.ml-3 > .wpdm-download-link').click()
    cy.readFile("cypress/W7_advanced_automtion_part2/uploadAndDownload.cy.js").should("exist")
});

});
