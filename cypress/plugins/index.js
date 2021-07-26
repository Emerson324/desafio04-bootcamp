/// <reference types="cypress" />

const selectTests = require('cypress-select-tests')

// return test names you want to run
const pickTests = (filename, foundTests, cypressConfig) => {
  // found tests will be names of the tests found in "filename" spec
  // it is a list of names, each name an Array of strings
  // ['suite 1', 'suite 2', ..., 'test name']

  // return [] to skip ALL tests
  // OR
  // let's only run tests with "does" in the title
  return foundTests.filter(fullTestName => fullTestName.join(' ').includes('does'))
}

module.exports = (on, config) => {
  on('file:preprocessor', selectTests(config, pickTests))
}