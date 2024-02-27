const { defineConfig } = require("cypress");


module.exports = defineConfig({

  
    "env": { "testData": "data.json"},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: "cypress/integration/*.js"
  },
});
