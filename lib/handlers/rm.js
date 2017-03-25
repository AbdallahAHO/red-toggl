'use strict';

module.exports = function (result) {
  console.log(
    `You have selected...\n` +
    `Delete?: ${result.confirm} \n` +
    `Deleting file "${result.filename}"\n`
  );
}
