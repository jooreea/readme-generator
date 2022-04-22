// Packages needed for this application
const render = require('./utils/render');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
    'What is the title of your project?',
    'Please describe your project.',
    'How does a user install your project?',
    'Please provide usage information for your project.',
    'Please choose a license.',
    'What are the guidelines for making contributions?',
    'What are the instructions for testing?',
    'What is your GitHub username?',
    'What is your email address?'];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

inquirer
.prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
        type: 'input',
        message: questions[1],
        name: 'description',
    },
    {
        type: 'input',
        message: questions[2],
        name: 'installation',
    },
    {
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {
          type: 'list',
          message: questions[4],
          name: 'license',
          choices: [
              'None',
              'Apache License 2.0',
              'GNU General Public License v3.0',
              'MIT License',
              'BSD 2-Clause "Simplified" License',
              'BSD 3-Clause "New" or "Revised" License',
              'Boost Software License 1.0',
              'Creative Commons Zero v1.0 Universal',
              'Eclipse Public License 2.0',
              'GNU Affero General Public License v3.0',
              'GNU General Public License v2.0',
              'GNU Lesser General Public License v3.0',
              'Mozilla Public License 2.0',
              'The Unlicense'
            ],
      },
      {
          type: 'input',
          message: questions[5],
          name: 'contributing',
      },
      {
        type: 'input',
        message: questions[6],
        name: 'tests',
      },
      {
          type: 'input',
          message: questions[7],
          name: 'github',
      },
      {
          type: 'input',
          message: questions[8],
          name: 'email',
      },
])
.then(data => {
    var md = render.generateMarkdown(data)
    writeToFile("README", md);
})
