// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Project title:",
    name: "title"
  },
  {
    type: "input",
    message: "Project description:",
    name: "description"
  },
  {
    type: "input",
    message: "Table of contents:",
    name: "contents"
  },
  {
    type: "input",
    message: "How do you install the application?",
    name: "installation"
  },
  {
    type: "input",
    message: "How do you use the application?",
    name: "usage"
  },
  {
    type: "input",
    message: "How does licensing work?",
    name: "license"
  },
  {
    type: "input",
    message: "Did anyone else contribute?",
    name: "contents"
  },
  {
    type: "input",
    message: "What kind of tests can you run?",
    name: "tests"
  },
];

// create these sections: Description, Installation, Usage, Contributing, and Tests

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // use fs package to write the file
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then(response => {
    const readMe = `
    
    `
    // use the response data to build one big README file (as a string)
    // THEN -->
    const finalReadMe = generateMarkdown(response);
  })
}

// Function call to initialize app
init();
