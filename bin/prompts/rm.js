let inquirer = require('inquirer');
var chalk = require('chalk');

let action = require('../../lib/handlers/rm');

module.exports = function(filename){
  console.log(
    `Running command rm ... \n` +
    `Arguments received: \n` +
    `filename: ${filename} \n`
  );

  let questions = [
    {
      type: 'input',
      name: 'confirm',
      message: chalk.blue(`Are you sure wants to delete file "${filename}"?`)
    }
  ];

  inquirer.prompt(questions).then(function (answers) {
    console.log(
      `Answers received:\n` +
      `confirm: ${answers.confirm} \n`
    );

    return Object.assign({filename}, answers);
  }).then(action);
}
