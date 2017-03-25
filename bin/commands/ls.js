'use strict';

let action = require('../../lib/handlers/ls');

module.exports = function(program){

  return program
    .command('ls') // A simple command - ls
    .alias('list') // You can specify the alias (list) for your command
    .description('Description of ls command')
    .option('-a, --all', "Display all files")
    .option('-p, --path <path>', "Display the list of filLisDisplay all files")
    .option('-c, --compare [compare]', "Display all files", './')
    .action(action);
}
