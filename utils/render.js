// Function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  var badge;
  var link;
  switch(license) {
    case 'Apache License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      link = '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU General Public License v3.0':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      link = '(https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case'MIT License':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      link = '(https://opensource.org/licenses/MIT)';
      break;
    case 'BSD 2-Clause "Simplified" License':
      badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
      link = '(https://opensource.org/licenses/BSD-2-Clause)';
      break;
    case'BSD 3-Clause "New" or "Revised" License': 
      badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      link = '(https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'Boost Software License 1.0':
      badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      link = '(https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
      link = '(http://creativecommons.org/publicdomain/zero/1.0/)';
      break;
    case 'Eclipse Public License 2.0':
      badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
      link = '(https://opensource.org/licenses/EPL-1.0)';
      break;
    case 'GNU Affero General Public License v3.0':
      badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
      link = '(https://www.gnu.org/licenses/agpl-3.0)';
      break;
    case 'GNU General Public License v2.0':
      badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      link = '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
      break;
    case 'GNU Lesser General Public License v3.0':
      badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
      link = '(https://www.gnu.org/licenses/lgpl-3.0)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      link = '(https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'The Unlicense':
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      link = '(http://unlicense.org/)';
      break;
    default:
      badge = '';
      link = '';
  };
  const items = {
    "badge": badge,
    "linkMessage": link ? `This application is covered under: [${license}]${link}` : 'This application is unlicensed.'
  };
  return items;
};

// Function to generate markdown for README
function generateMarkdown(data) {
  var licenseItems = renderLicense(data.license);
  return `${licenseItems.badge}
  # ${data.title}
  ## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license) 
  5. [Contributing](#contributing) 
  6. [Tests](#tests)
  7. [Questions](#questions)

  ## <a id="description"></a> Description
  ${data.description}

  ## <a id="installation"></a> Installation 
  ${data.installation}

  ## <a id="usage"></a> Usage 
  ${data.usage}

  ## <a id="license"></a> License 
  ${licenseItems.linkMessage}

  ## <a id="contributing"></a> Contributing 
  ${data.contributing}

  ## <a id="tests"></a> Tests 
  ${data.tests}

  ## <a id="questions"></a> Questions 
  For more information about this project, please go to my Github page: https://github.com/${data.github}.\n
  If you have additional questions, you can reach me at ${data.email}.

  ## Video Tutorial
  https://youtu.be/xxp3HtZrchg
`;
};

// Export function that generates function
module.exports = {
  generateMarkdown
};
