'use strict';

let action = require('../prompts/rm');

module.exports = function(program){

  return program
    .command('rm')
    .description('Remove a file')
    .arguments('<file-name>')
    .action(action);
}
