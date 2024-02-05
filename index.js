// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

/*
Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
*/

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
        message: "How should your project be used?",
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
]
// .then((answers) => {
//     const write = writeToFile(answers);
//     // const generateReadMe = readMe(answers);
//     // fs.writeFile("readme.md", generateReadMe, (err) =>
//     // err ? console.log(err) : console.log("success"))
//     // console.log(answers);
// });

// const readMe = ({title, description, installation, usage}) =>
// `#${title}
// content
// ##${description}
// content
// ##${installation}
// content
// ##${usage}
// content`; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    // console.log(data);
    // console.log(fileName);
    // console.log(generateMarkdown);
    // fs.writeFile("readme.md", `${generateMarkdown}`, (err) => 
    //     err ? console.log(err) : console.log("success")
    // );
};
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Generating README...");
        console.log(inquirerResponses);
        console.log(inquirerResponses.licence);
        writeToFile("readme.md", generateMarkdown({...inquirerResponses }));
    });
}

// Function call to initialize app
init();
