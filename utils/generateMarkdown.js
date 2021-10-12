// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  return `<string with all markdown code for the chosen badge>`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  return `<string with a link to the appropriate license>`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // return a final string with all licensing markdown
}

// TODO: Create a function to generate markdown for README
// Could use the text and template from the example in the hw README link
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}
  - What was your motivation?
  - Why did you build this project?
  - What problem does it solve?
  - What did you learn?

  ## Table of Contents (check https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
  ${data.contents}
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${data.installation}
  - What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

  ## Usage
  ${data.usage}
  - Provide instructions and examples for use. Include screenshots as needed.

  ## Credits
  ${data.credits}
  - List your collaborators, if any, with links to their GitHub profiles.
  - If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  - If you followed tutorials, include links to those here as well.


  ## License
  ${data.license}
  - The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project.
  - If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
`;
}

module.exports = generateMarkdown;
