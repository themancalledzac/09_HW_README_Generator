// linking to inquirer modules 
const inquirer = require('inquirer');
// giving access to your file system to read/write/modify directly on the users computer.
const fs = require('fs');
const { NONAME } = require('dns');

//
inquirer
    .prompt([
        {
            name: 'name',
            type: 'input',
            message: 'What is your name?',
            default: 'none',

        },
    ])
    .then((response) => {

        const fileName = `${response.name.toLowerCase().split(" ").join("")}.md`;
        fs.writeFile(fileName, JSON.stringify(response, null, "\t"), (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });