// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//Cypress.Commands.add('enterTableData', (data) => {
Cypress.Commands.add('enterTableData', (data) => {
    cy.wrap(data).each((item) => {
        cy.get('#jsondata').type(JSON.stringify(item) + '{enter}');
    });
});

Cypress.Commands.add('verifyTableData', (expectedData) => {
    cy.get('table#mytable tbody tr').each(($row, index) => {
        const cells = $row.find('td');
        const actualData = {
            name: cells.eq(0).text(),
            age: parseInt(cells.eq(1).text()),
            gender: cells.eq(2).text(),
        };

        expect(actualData).to.deep.equal(expectedData[index]);
    });
});

Cypress.Commands.add('enterTableData', (data) => {
    // Clear the input field before entering data
    cy.get('#jsondata').clear();
  
    // Stringify the entire array of objects
    const jsonDataString = JSON.stringify(data);
  
    // Enter the stringified JSON data into the input field
    cy.get('#jsondata').type(jsonDataString + '{enter}');
  });
  
  
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })