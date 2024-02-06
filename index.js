// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your projct?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a short yet detailed description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions for the project",
    },
    {
        type: "input",
        name: "usage",
        message: "How should your project be used?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Are there any contributors to the code?",
    },
    {
        type: "input",
        name: "test",
        message: "Tests to be run on this code",
    },
    {
        type: "input",
        name: "github",
        message: "Enter your Github userName",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email?",
    },
    {
        type: "checkbox",
        name: "licence",
        message: "What licence would you like to use?",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause License",
            "BSD 3-Clause License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // console.log(fileName);
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};
// TODO: Create a function to initialize app
function init() {
    // Run the inquirer.prompt and .then inside the init function and pass in the questions array.
    inquirer.prompt(questions).then((inquirerResponse) => {
        console.log("Generating README...");
        // console.log(inquirerResponse);
        // In the callback to writeToFile, the parameter fileName becomes the file readme.md,
        // and the parameter data becomes the function generateMarkdown.
        // The spread operator gives acces to all items from inquirerResponse. 
        writeToFile("./user_generated_readme/readme.md", generateMarkdown({...inquirerResponse }));
    });
};

// Function call to initialize app
init();
