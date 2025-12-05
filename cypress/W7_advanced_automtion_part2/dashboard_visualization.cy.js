// Cypress Cloud Dashboard Visualization: Connect your Cypress project to the
// Cypress Cloud Dashboard. Run the test suite with the --record flag to send
// results to the dashboard. Explore the dashboard to visualize test runs, analyze
// trends, review video recordings, and debug failed tests. This reinforces the
// importance of centralized test execution monitoring and team collaboration.
// • Note: Visualize all the above (question 1 – 5) test scripts in the Cypress
// Dashboard.

//steps involved to visualize report in cypress cloud

//1. connect project to Cypress cloud
    //sign in to cypress cloud
    //create/select a project and copy project id 
    // add the project id in cypress.config.js
//2. Add cypress record Key
    //Get the Record Key from the Project Settings in Cypress Cloud
    //can be saved as an environment variable(.env). need to place in .gitignore in this case
//3. Run tests
    //npx cypress run --record --key "project key"
//4. view result in cypress cloud dashboard
    //see full test run history
    // view pass/fail status for each spec
    // watch video recordings of each test
    // inspect screenshots of failed tests
    // review error messages
    // Analyze run trends and performance
//5.purpose
//centralized monitoring of automated tests
//for debuging from the videos/screenshots
//team collaboration
