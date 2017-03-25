'use strict';

module.exports = function(args, program){
  console.log(
    `Running command ls ... \n` +
    `Arguments received: \n` +
    `all: ${program.all} \n` +
    `path: ${program.path} \n` +
    `compare: ${program.compare} \n`
  );
}
