const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Your name:",
    name: "name"
  },
  {
    type: "number",
    message: "What year it is? (YYYY)",
    name: "year"
  },
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
    message: "What is your GitHub profile URL?",
    name: "github"
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email"
  },
  {
    type: "list",
    name: "license",
    message: "Please choose which license you'd like to use:",
    choices: [
      "Apache 2.0 License",
      "BSD 3-Clause License",
      "The MIT License",
      "Mozilla Public License 2.0",
      "No license selected"
    ]
  },
];

function init() {
  inquirer
    .prompt(questions)
    .then(response => {
      const finalReadMe = generateMarkdown(response);
      fs.writeFile("sample-README.md", finalReadMe, err => {
        err ? console.log("Oh no! Something went wrong 😵‍💫.") : console.log("Here's your README.md file!")
      })
    })
}

init();
