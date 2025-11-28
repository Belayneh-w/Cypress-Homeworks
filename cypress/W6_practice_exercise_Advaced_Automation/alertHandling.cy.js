// 1. Testing Different Types of Alerts: Write a Cypress test script to handle
// JavaScript alerts (alert, confirmation, and prompt).
// • Your test should:
// • Click each alert button.
// • Capture the alert text and validate it.
// • Accept or dismiss the alert where applicable.
// • For prompts, provide input text and validate the result displayed on the
// page.
// Website: https://vinothqaacademy.com/alert-and-popup/


describe('testing different alerts', () => {
    it('handles alerts', () => {
        cy.visit('https://vinothqaacademy.com/alert-and-popup/')
        //capture alert text
        cy.on("window:alert",(alertMsg)=>{
            expect(alertMsg).to.equal('I am an alert box!')
        })
       //click the alert button
        cy.get('.elementor-element-fc8696a > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click()
        //Assert the resulting text
        cy.get('#demotwo').should("have.text","You clicked on OK!")
    });
    //confim an alert
    it('it confirms alert', () => {
        cy.visit('https://vinothqaacademy.com/alert-and-popup/')

        //capture confirm alert
        cy.on("window:confirm",(confirmMsg)=>{
            expect(confirmMsg).to.equal("Confirm pop up with OK and Cancel button")
            //return true;
          // return false;
        })
        //click the alert button
        cy.get('.elementor-element-01aedcf > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click() 
        //
        cy.get("#demo").should('have.text',"You clicked on OK!")
    })


    it.only('prompt alerts', () => {
        cy.visit('https://vinothqaacademy.com/alert-and-popup/')
        //const inputText = "Yes"
        const inputText = "No"
        cy.window().then((win)=>{
      
        cy.stub(win,"prompt").returns(inputText)
   
        })
        //click the alert button
 
        cy.get('.elementor-element-d0c9145 > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > center > button').click()
        let msg;
        if(inputText === "Yes"){
            msg= "Thanks for Liking Automation"
        }else if(inputText === "No"){
            msg = 'Sad to hear it ! '
        }else{
           msg = "Invalid input" 
        }
        cy.get("#demoone").should('have.text',msg)
})

});
