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

  ## Table of Contents (check https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

## Usage

## Credits

## License

`;
}

module.exports = generateMarkdown;
