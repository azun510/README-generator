// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description};
  

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  To install necessary dependencies, run the following command:
  
  ${data.installation}
  

  ## Usage
  ${data.usage}

  ## Contribution 
  To contribute to this project, ${data.contribute}

  ## Tests
  To run tests, use:
  
  ${data.test}
  
  
  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-green)
  This application is covered under ${data.license} licensing.
  
  ## Questions

  Any additional questions feel free to email me at ${data.email}.
  GitHub: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
