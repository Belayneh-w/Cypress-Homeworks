// 6. Cypress Mochawesome HTML Reporting: Integrate Mochawesome reporter
// into Cypress. Configure the project to generate HTML reports after test
// execution. Run the test suite, then open the generated HTML report to view
// structured results with pass/fail status, error stack traces, and screenshots.
// This demonstrates advanced reporting capabilities for better test analysis.
// 3 of 3
// • Note: Generate HTML reports for all the above (question 1 – 5) test
// scripts.

//steps involved to generate cypress Mochawesome HTML reporting

//1. install Mochawesome in current project;
// npm install --save-dev cypress-mochawesome-reporter

//2. configer it in cypress.config.js
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({

//  // reporter: 'cypress-mochawesome-reporter',
//   video:true, 
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//     specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}"
//   },
// });

//3. import/register the reporter in cypress/support/e2e.js
   // import "cypress-mochawesome-reporter/register";
//4. run for the selected project/folder
   // npx cypress run --spec "cypress/W7_advanced_automtion_part2"
//5.open and see the generated report


