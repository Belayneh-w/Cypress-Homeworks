describe('Test UI', () => {
    it('Test checkbox', () => {
       cy.visit('http://www.rahulshettyacademy.com/AutomationPractice/') 
       cy.get('#checkBoxOption1').check().should("have.value", "option1")
       cy.get('#checkBoxOption2').check().should("have.value", "option2")
       cy.get('#checkBoxOption1').uncheck()
       cy.get('input[type = "checkbox"]').check().should(["option3", "option1"])
    });
    it('About Static dropdown', () => {
        cy.visit('http://www.rahulshettyacademy.com/AutomationPractice/') 
        cy.get('#dropdown-class-example').select("option3").should("have.value", "option3")//using value
        cy.get('#dropdown-class-example').select("Option2").should("contain.text", "Option2")// using visble value
    });
    
it('Automating dynamic Dropdown', () => {
    cy.visit('http://www.rahulshettyacademy.com/AutomationPractice/') 
    cy.get('#autocomplete').type("Et")
    cy.get(".ui-menu-item").each(($sel, index,$list)=>{
        if($sel.text() == "Ethiopia"){
            cy.wrap($sel).click()
        }
      
    })
    cy.get(".ui-menu-item").should("contain", "Ethiopia")
    //cy.get(".ui-menu-item").should("have.value", "Ethiopia") // b/c it have no value
});


    
});
describe('Asynchronuos Excution of cypress', () => {
    it('visit asynchronous excution', () => {
        cy.visit('https://www.evangadi.com/login')
        let userName;
        console.log('before running cypress command run')
        cy.get('.loginForm > :nth-child(1) > .form-control').type('TestUser').then(()=>{
            userName = "TestUser"
            console.log('After cypress command run', userName)
        }) 
        
    });
    

    it('visit asynchronous excution using aliase', () => {
        cy.visit('https://www.evangadi.com/login')
        let userName;
        console.log('before running cypress command run')
        cy.get('.loginForm > :nth-child(1) > .form-control').as('userNamefield')
        cy.get('@userNamefield')
        .type('TestUser')
        .wrap('TestUser')
        .then(()=>{
            userName = "TestUser"
            console.log('After cypress command run', userName)
        }) 
        
    });
});
