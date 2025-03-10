import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { careerPage } from '../support/pageObjects/objects';
import 'cypress-xpath';
import * as fs from 'fs';

Given('I open the website', () => {
  cy.visit('https://www.holycode.com/')
    .should('be.visible') 
    .then(() => {
      console.log('Website opened successfully');
    });
});

Then('the page h1 title should be {string}', (expectedH1) => {
   cy.get('h1').should('have.text', expectedH1);
});

Given('I hover over the Careers tab', () => {
  cy.xpath(careerPage.careerLink).trigger('mouseover');  
});

When('I click on Open positions', () => {
  cy.xpath(careerPage.openPositions).click(); 
});

Then('the page h1 title should be {string}', (expectedTitle) => {
  cy.get('h1').should('have.text', expectedTitle);
});

Given('I search for the QA specialist role', () => {
  cy.get(careerPage.jobSearch).type(careerPage.seniorQATitle); 
});

Then('the page h3 title should be {string}', (expectedTitle) => {
  cy.get('h3').should('have.text', expectedTitle);
});

Then('I should see the "EtonDigital" team name', () => {
  cy.contains(careerPage.teamEtonDigital).should('be.visible');
});

Given('I select Serbia as a location', () => {
  cy.contains(careerPage.location).click();
});

When('I clear the search bar', () => {
  cy.get(careerPage.jobSearch).clear();  
});

When('I collect the job titles for all positions in Serbia', () => {
  cy.xpath(careerPage.jobs).each(($job) => {
    const jobTitle = $job.find('h3').text().trim(); 
    cy.wrap(jobTitle).as('jobTitles');
  });
});

Then('the titles should be saved to a text file', function() {
  cy.get('@jobTitles').then((jobElements) => {
    const jobTitles = jobElements.map((index, element) => Cypress.$(element).find('h3').text()).get();
    const jobTitlesString = jobTitles.join('\n');
    const filePath = 'cypress/fixtures/jobTitles.txt';
    fs.writeFileSync(filePath, jobTitlesString, 'utf8');
  });
});
