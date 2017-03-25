'use strict';

let chalk = require('chalk');
let packageJson = require('../../../package.json');
let action = require('../../lib/handlers/index');

module.exports = function(program){

  return program
    .command(packageJson.name)
    .arguments('<project-directory>')
    .usage(`${chalk.green('<command>')} [options]`)
    .option('-a, --all', "Display all files")
    .option('-p, --path <path>', "Display the list of filLisDisplay all files")
    .option('-c, --compare [compare]', "Display all files", './')
    .action(action);
}
