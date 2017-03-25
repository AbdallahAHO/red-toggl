'use strict';

let chalk = require('chalk');
let packageJson = require('../../package.json');

module.exports = function(program) {
  program
    .version(packageJson.version)
    .on('--help', () => {
      console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    })
    .allowUnknownOption()

    return program;
}
