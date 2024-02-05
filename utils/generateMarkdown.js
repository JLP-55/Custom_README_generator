// TODO: Create a function that returns a license badge based on which license is passed in

const licenceArray = [
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
];

// If there is no license, return an empty string
// const element = array[i];
function renderLicenseBadge(licence) {
  if (licence === licenceArray[0]) {
    // return "[![licence: Apache licence 2.0 (https://img.shields.io/badge/any_text-you_like-blue)]"
    // return "![Static Badge](https://img.shields.io/badge/Licence-" + licenceArray[0] + "-blue)"
    return "![Static Badge](https://img.shields.io/badge/Licence-Apache_licence--2.0-blue)"
  } else if (licence === licenceArray[1]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-GNU_General_Public_Licence--v3.0-blue)"
  }
}

// switch (licenceArray) {
//   case "Apache License 2.0",
//   return
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
console.log(licence);
if (licence === licenceArray[0]) {
  return "https://opensource.org/license/apache-2-0/";
  };
}

  // const element = array[i];
// renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var userSelection = "";
  for (let i = 0; i < data.licence.length; i++) {
    userSelection += renderLicenseBadge(data.licence[i]);  
  }
  return `# ${data.title}
  ${userSelection}
  \nRead about your chosen licence here: ${renderLicenseLink(data.licence)}
  ## Table of contents:
  \n- ![Description]
  \n- Installation
  \n- Usage
  \n- Contribution
  \n- Tests
  \n- Licence
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Tests:
  ${data.test}
  ## Licence:
  ${(data.licence)}
  `
  // return `# ${data.title} # ${data.Description} # ${data.Installation} # ${data.Usage}`;
}
// generateMarkdown();
module.exports = generateMarkdown;
// module.exports = renderLicenseBadge;
