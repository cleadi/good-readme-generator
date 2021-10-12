const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
    message: "Did anyone else contribute?",
    name: "credits"
  },
  {
    type: "input",
    message: "How is your project licensed?",
    name: "license"
  },
];

fs.writeFile("README.md", finalReadMe, err => {
  err ? console.log("Oh no! Something went wrong 😵‍💫.") : console.log("Here's your README.md file!")
})

function init() {
  inquirer
  .prompt(questions)
  .then(response => {
    const finalReadMe = generateMarkdown(response);
  })
}

init();
