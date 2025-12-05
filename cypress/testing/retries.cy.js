describe('retries suit', () => {
    it('retries test case',{retries:{
        runMode:2,
        openMode:1}}, () => {
        cy.visit("https://evangadi.com")
        cy.get("#newid").should("have.text", "hellowworld")
    });
    
});
