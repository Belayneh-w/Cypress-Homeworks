describe('new tab and child  window', () => {
    it('new tab and check if child window opens', () => {
      cy.visit("https://letskodeit.com/practice")  // target _blanck
     // cy.get("#")
    });
    it.only('new window', () => {
        cy.visit("https://letskodeit.com/practice")
        let
        // cy.window().then((win)=>{
        //     cy.stub(win,"open").callsFake((url)=>{
        //         win.location.url= url
        //     })
        // })
        // cy.get("#openwindow").click()
    });
    
    
});
