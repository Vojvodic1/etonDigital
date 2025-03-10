So first of all, I'm not an cypress user. I used groovy with katalon studio mostly. I have little exp with cypress. I had some issues with configuration and couldn't get the script to run. But I wanted to finish it nevertheless.

This is a cypress BDD test (cucumber)

1 .Before running the test u need to have installed:
    Node.js
    Cypress
    TypeScript
Again, due to issues in config, not sure if the test is runnable

2. Clone the repository to your local machine:
   git clone https://github.com/Vojvodic1/etonDigital.git
3. Install dependencies
     npm install

4. Open Cypress
    npx cypress open

5. Run cypress
   npx cypress run

About file structure:
cypress/e2e: Contains the test files (feature file with cy.ts file)
cypress/fixtures: Contains fixture data (e.g., users.json, which we don't use here)
cypress/plugins: Contains Cypress plugins.
cypress/support: Contains page objects which we used to get around the page
tsconfig.json: TypeScript configuration file.
cypress.config.ts: Cypress configuration file.
README.md: Setup and test run instructions.

As already stated, test is written in BDD using cucumber (Given, When, Then)
