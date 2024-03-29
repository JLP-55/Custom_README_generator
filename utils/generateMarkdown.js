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
function renderLicenseBadge(licence) {
  if (licence === licenceArray[0]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-Apache_licence--2.0-blue)"
  } else if (licence === licenceArray[1]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-GNU_General_Public_Licence--v3.0-blue)"
  } else if (licence === licenceArray[2]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-MIT_licence-blue)"
  } else if (licence === licenceArray[3]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-BSD_2_Clause_Licence-blue)"
  } else if (licence === licenceArray[4]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-BSD_3_Clause_Licence-blue)"
  } else if (licence === licenceArray[5]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-Boost_Software_Licence--1.0-blue)"
  } else if (licence === licenceArray[6]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-Creative_Commons_Zero_v1.0_Universal-blue)"
  } else if (licence === licenceArray[7]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-Eclipse_Public_Licence_2.0-blue)"
  } else if (licence === licenceArray[8]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-GNU_Affero_General_Public_License_v3.0-blue)"
  } else if (licence === licenceArray[9]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-GNU_General_Public_Licence_v2.0-blue)"
  } else if (licence === licenceArray[10]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-GNU_Lesser_General_Public_Licence_v2.1-blue)"
  } else if (licence === licenceArray[11]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-Mozilla_Public_Licence_2.0-blue)"
  } else if (licence === licenceArray[12]) {
    return "![Static Badge](https://img.shields.io/badge/Licence-The_Unlicence-blue)"
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
  if (licence === licenceArray[0]) {
    return `[${licenceArray[0]}](https://opensource.org/license/apache-2-0/)`
  } else if (licence === licenceArray[1]) {
    return `[${licenceArray[1]}](https://opensource.org/license/gpl-3-0/)`
  } else if (licence===licenceArray[2]){
    return `[${licenceArray[2]}](https://opensource.org/license/mit/)`
  } else if (licence===licenceArray[3]){
    return `[${licenceArray[3]}](https://opensource.org/license/bsd-2-clause/)`
  } else if (licence===licenceArray[4]){
    return `[${licenceArray[4]}](https://opensource.org/license/bsd-3-clause/)`
  } else if (licence===licenceArray[5]){
    return `[${licenceArray[5]}](https://opensource.org/license/bsl-1-0/)`
  } else if (licence===licenceArray[6]){
    return `[${licenceArray[6]}](https://opensource.org/license/upl/)`
  } else if (licence===licenceArray[7]){
    return `[${licenceArray[7]}](https://opensource.org/license/epl-2-0/)`
  } else if (licence===licenceArray[8]){
    return `[${licenceArray[8]}](https://opensource.org/license/agpl-v3/)`
  } else if (licence===licenceArray[9]){
    return `[${licenceArray[9]}](https://opensource.org/license/gpl-2-0/)`
  } else if (licence===licenceArray[10]){
    return `[${licenceArray[10]}](https://opensource.org/license/lgpl-2-1/)`
  } else if (licence===licenceArray[11]){
    return `[${licenceArray[11]}](https://opensource.org/license/mpl-2-0/)`
  } else if (licence===licenceArray[12]){
    return `[${licenceArray[12]}](https://opensource.org/license/unlicense/)`
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var userSelectionBadge = "";
  var userSelectionLink = "";
  // Iterate through each licence function to return items based on the users selected licence and assign them to the above variables.
  for (let i = 0; i < data.licence.length; i++) {
    userSelectionBadge += renderLicenseBadge(data.licence[i]);  
  }

  for (let i = 0; i < data.licence.length; i++) {
    userSelectionLink += renderLicenseLink(data.licence[i]);
  };

  // Will return this content for the readme file if the user doesn't chose a licence.
  if (userSelectionBadge === "" || userSelectionLink === "") {
    return `# ${data.title}
  ## Table of contents:
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#usage">Usage:</a>
    </li>
    <li>
      <a href="#contribution">Contribution</a>
    </li>
    <li>
      <a href="#tests">Tests</a>
    </li>
    <li>
      <a href="#questions">Questions</a>
    </li>
  </ol>

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
  ## Questions:
  <ul>
    <li>
      Check out my Github: <a href= https://github.com/${data.github}>${data.github}</a>
    </li>
    <li>
      Reach me at my email: ${data.email}
    </li>
  </ul>
  `
  };

  // Will return this content for the readme if the user does chose a licence.
  return `# ${data.title}
  ${userSelectionBadge}

  ## Table of contents:
  <ol>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#usage">Usage:</a>
    </li>
    <li>
      <a href="#contribution">Contribution</a>
    </li>
    <li>
      <a href="#tests">Tests</a>
    </li>
    <li>
      <a href="#licence">Licence</a>
    </li>
    <li>
      <a href="#questions">Questions</a>
    </li>
  </ol>

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
  \n${(userSelectionLink)}
  \nClick to read about your chosen licence
  ## Questions:\n
  <ul>
    <li>
      Check out my Github: <a href= https://github.com/${data.github}>${data.github}</a>
    </li>
    <li>
      Reach me at my email: ${data.email}
    </li>
  </ul>
  `  
};

module.exports = generateMarkdown;