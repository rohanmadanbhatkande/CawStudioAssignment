describe('Dynamic Table Test', () => {
    it('should populate and verify data in the dynamic table', () => {
        // Load test data from fixture
        cy.fixture('example').then((data) => {
            // Convert data to JSON string
            const jsonDataString = JSON.stringify(data);

            // Visit the page
            cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');

            // Click on the summary to display the JSON input
            cy.get('summary').click();

            // Clear the JSON input and type the test data
            cy.get('#jsondata').clear().type(jsonDataString, { parseSpecialCharSequences: false });

            // Click on the Load Data button
            cy.get('#refreshtable').click();

            // Verify the number of rows in the table
            cy.get('table tr').should('have.length', data.length + 1); // +1 for the header row

            // Verify table data
            cy.get('table tr').each(($row, index) => {
                if (index === 0) return; // Skip header row
                const rowData = {
                    name: $row.find('td').eq(0).text().trim(),
                    age: parseInt($row.find('td').eq(1).text().trim()),
                    gender: $row.find('td').eq(2).text().trim()
                };

                // Assert each property of rowData with corresponding property in data
                expect(rowData.name).to.equal(data[index - 1].name);
                expect(rowData.age).to.equal(data[index - 1].age);
                expect(rowData.gender).to.equal(data[index - 1].gender);
            });
        });
    });
});
