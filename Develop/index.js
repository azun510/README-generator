// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project? (Required):",
        validate: (projectInput) => {
          if (projectInput) {
            return true;
          } else {
            console.log("Please enter your project name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required):",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?:",
      },
      {
        type: "input",
        name: "description",
        message: "Describe your project:",
      },
      {
        type: "input",
        name: "installation",
        message: "Any necessary information needed about using this project?:",
      },
      {
        type: "input",
        name: "usage",
        message: "Should user be aware of anything specific before downloading?:",
      },
      {
        type: "input",
        name: "contribute",
        message:
          "Any neccesary information needed about contributing to this project?:",
      },
      {
        type: "input",
        name: "test",
        message: "Any necessary information about how to test this project?:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose license for your project:",
        choices: ['Apache', 'WordPress', 'MIT', 'NPM Packages'],
      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,err => {
        if(err) throw err;

        console.log('Check out your new README!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((Answers) => {
        writeToFile('README.md', generateMarkdown(Answers));
    })
}

// Function call to initialize app
init();
