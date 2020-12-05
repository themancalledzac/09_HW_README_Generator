const questions = [
        {
            name: 'title',
            type: 'input',
            message: 'What is the title of your project?',

        }, 
        {
            name: 'description',
            type: 'editor',
            message: 'Please describe your project'
        },
        {
            name: 'installation',
            type: 'input',
            message: 'What are your installation needs?',

        }, 
        {
            name: 'usage',
            type: 'editor',
            message: 'What is the user story? What usage is expected out of this application?'
        },
        {
            name: 'licence',
            type: 'list',
            choices: [
                "afl-3.0",
                "apache-2.0",
                "bsd-3-clause",
                "cc",
                "cc-by-4.0",
                "wtfpl",
                "epl-2.0",
                "	eupl-1.1",
                "gpl-3.0",
                "mpl-2.0",
                "osl-3.0",
            ],
            message: 'What Licenses are you utilizing?'
        }, 
        {
            name: 'contributing',
            type: 'input',
            message: 'How would you like to handle contributions?'
        },
        {
            name: 'image',
            type: 'input',
            message: 'Do you have an example image of your project?'

        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your contact email?'
        }, 
        {
            name: 'github',
            type: 'input',
            message: 'What is your github username?'
        }
]

module.exports = prompt;