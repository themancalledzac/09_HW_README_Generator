// linking to inquirer modules 
const inquirer = require('inquirer');
// giving access to your file system to read/write/modify directly on the users computer.
const fs = require('fs');
// TODO --- const template
const template = require('./assets/js/template.js');
// move question prompts to another js file?
// const questions = require('./questions.js');

//
inquirer
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?',

        }, 
        {
            name: 'description',
            type: 'input',
            message: 'Please describe your project'
        }
        // {
        //     name: 'Table of contents',
        //     type: '', // list
        //     // list items
        //     default: 'introduction',
        // }
    ])
    .then((response) => {

        // Should the file name simply be README.md?
        const fileName = `READMEtest.md`;
        fs.writeFile(fileName, template(response), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });