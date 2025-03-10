Feature: EtonDigital feature

  Scenario: Visit a holycode website
    Given I open the website
    Then the page h1 title should be "Tech Solutions to scale"
    
    Given I hover over the careers tab
    When I click on open positions
    Then the page h1 title should be "Join our team"
    
    Given I search for the QA specialist role
    Then I the shown text should be "Senior QA Specialist"
    Then I should se the EtonDigital team name

    Given I select serbia as a location
    When I clear the search bar
    When I collect all the job titles in Serbia
