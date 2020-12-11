// linking to inquirer modules 
const inquirer = require('inquirer');
// giving access to your file system to read/write/modify directly on the users computer.
const fs = require('fs');
// DONE --- const template
const template = require('./assets/js/template.js');
const { listenerCount } = require('process');
// move question prompts to another js file?
const prompt = require('./assets/js/prompt');

//

inquirer.prompt(prompt)



.then((response) => {
    
    // Should the file name simply be README.md?
    const fileName = `READMEtest.md`;
    fs.writeFile(fileName, template(response), (err) =>
    err ? console.log(err) : console.log("Success!")
    );
});
