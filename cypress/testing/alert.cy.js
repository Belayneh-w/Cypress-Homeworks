describe('about Alert', () => {
    it('simple alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.on("window.alert",(alertmsg)=>{
        expect(alertmsg).to.equal("I am a JS Alert" )
    })
    cy.get(':nth-child(1) > button').click()
    cy.get('#result').should("have.text","You successfully clicked an alert")
    });

    it('simple alert', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.on("window.confirm",(alertmsg)=>{
            expect(alertmsg).to.equal("I am a JS Confirm" )
            return true;
        })
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should("have.text","You clicked: Ok")
        });

        //prompt
    
        it.only('Prompt alert', () => {
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.window().then((win)=>{
                cy.stub(win,"prompt").returns("Hello prompt")
            }) 
            cy.get(':nth-child(3) > button').click()
            cy.get('p#result').should("have.text","You entered: Hello prompt")
         
            })
        

});
