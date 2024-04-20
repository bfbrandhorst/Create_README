// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'none') { return `![badge](https://img.shields.io/badge/License-${license}-blue.svg)` }

    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'none') {
        return `[License](#license)`
    }
    return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'none') {
        return `\n ## License \n

        This project is licensed under: ${license}`

    }
    return '';
}

// // TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
    return `
# ${data.Title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- ${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.license}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}


## Contributing
${data.Contributing}

## Tests
${data.Testing}

## Questions
If you have any questions, please feel free to contact me:
- GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;