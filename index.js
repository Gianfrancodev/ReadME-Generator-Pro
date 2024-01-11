// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',

    }





];

// TODO: Create a function to write README file
function writeToFile(answers,licenseBadge, licenseUrl) {
        const fileName = 'README.md';
        const readmePageContent = generateMarkdown(answers, licenseBadge, licenseUrl);
        fs.writeFile(`./user-readme/${fileName}`, readmePageContent, (err) => err ? console.log(err) : console.log('README successfully created!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        if (answers.license == "MIT") {
            licenseBadge = "MIT-yellow";
            licenseUrl = "MIT";
          } else if (answers.license == "Apache 2.0") {
            licenseBadge = "Apache_2.0-blue";
            licenseUrl = "Apache-2.0";
          } else if (answers.license == "Zlib") {
            licenseBadge = "Zlib-lightgrey";
            licenseUrl = "zlib";
          } else if (answers.license == "Mozilla 2.0") {
            licenseBadge = "MPL_2.0-brightgreen";
            licenseUrl = "MPL-2.0";
          } else if (answers.license == "Eclipse 1.0") {
            licenseBadge = "EPL_1.0-red";
            licenseUrl = "EPL-1.0";
          } else if (answers.license == "GNU GPL 3.0") {
            licenseBadge = "GPLv3-blue";
            licenseUrl = "gpl-3.0";
          } else if (answers.license == "None"){
            licenseBadge = "None";
            licenseUrl = "None";
          };

        writeToFile(answers, licenseBadge, licenseUrl);
    })
}

// Function call to initialize app
init();
