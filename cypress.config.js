const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

module.exports = defineConfig({
  projectId: 'jbp1hz',
 // retries:2,
// retries:{
//   openMode:2,
//   runMode:1
// },
  reporter: 'cypress-mochawesome-reporter',
  video:true, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      dotenv.config();
      return config;
    },
    specPattern: "cypress/**/*.cy.{js,jsx,ts,tsx}"
  },
});
