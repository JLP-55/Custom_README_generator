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
}

// switch (licenceArray) {
//   case "Apache License 2.0",
//   return
// }

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

// const element = array[i];
// renderLicenseLink();

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var userSelectionBadge = "";
  var userSelectionLink = "";
  for (let i = 0; i < data.licence.length; i++) {
    userSelectionBadge += renderLicenseBadge(data.licence[i]);  
  }

  for (let i = 0; i < data.licence.length; i++) {
    userSelectionLink += renderLicenseLink(data.licence[i]);
  };

  return `# ${data.title}
  ${userSelectionBadge}
  \nRead about your chosen licence here:
  \n${(userSelectionLink)}
  ## Table of contents:
  \n- Description
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
