const template = (response) => {
    const {title, description, installation, usage, licence, contributing, image, questions, email, github} = response;
    return `## ${title} 
   
## Table of Contents
[Description](#Description)
[Installation](#Installation)
[Usage](#Usage)
[Licence](#Licence)
[Contributing](#Contributing)
[Tests](#Tests)
[Questions](#Questions)


## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Licence
${licence}

## Contributing
${contributing}

## Tests
${image}

## Questions
${questions}

## How to contact:

### Email: [${email}](mailto:${email})
### Github: [${github}](https://github.com/${github})`;
};

module.exports = template;
