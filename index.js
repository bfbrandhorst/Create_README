// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');


// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide a concise description of what your project is about.',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'Provide detailed instruction for how to install your project and its dependencies.',
        name: 'Installation',
    },
    {
        type: 'input',
        message: 'What is a brief overveiw of how to naviagte and use your project?',
        name: 'Usage',
    },

    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Explain how others can or have contributed to your project, include guidelines for submitting bug reports, or feature requests.',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Enter information on how to run tests for your projects functionality',
        name: 'Testing',
    },
    {
        type: 'input',
        message: 'Enter Github username',
        name: 'Username',
    },
    {
        type: 'input',
        message: 'Please provide email address',
        name: 'Email',
    },
    {
        type: 'input',
        message: 'Ask questions about the project, seek clarifcation, or report issues. Please refer to contact information.',
        name: 'Questions',
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        console.log(userAnswers)
        writeToFile('README.md', generateMarkdown({ ...userAnswers }));
    })
}

// Function call to initialize app
init();