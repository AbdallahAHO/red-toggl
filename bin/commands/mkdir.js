'use strict';

let action = require('../../lib/handlers/mkdir');

module.exports = function(program){

  return program
    .command('mkdir')
    .description('Make a new directory')
    .arguments('<dir> [otherDirs...]')
    .action(action);
}
