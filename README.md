# CLI Boilerplate for node
`cli-boilerplate-node` is boilerplate to create node node command line interface (CLI) applications using Commander, Chalk, Inquirer and ES2015/17.

[![GitHub issues](https://img.shields.io/github/issues/sun1l/cli-boilerplate-node.svg)](https://github.com/sun1l/cli-boilerplate-node/issues)
[![dependencies Status](https://david-dm.org/sun1l/cli-boilerplate-node/status.svg)](https://david-dm.org/sun1l/cli-boilerplate-node)
[![devDependencies Status](https://david-dm.org/sun1l/cli-boilerplate-node/dev-status.svg)](https://david-dm.org/sun1l/cli-boilerplate-node?type=dev)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/sun1l/cli-boilerplate-node/master/LICENSE)

[Quick start](#quick-start) |
[Features](#features) |
[Packages Used](#packages-used) |
[Contributing](#contributing) |
[License](#license)

<a id="quick-start"></a>
# Quick start

1. Clone this repo using git clone `--depth=1 https://github.com/sun1l/cli-boilerplate-node.git`
2. Run `npm run setup` to install dependencies and clean the git repo.

# Features

* ES2015/17 ready, [Babel CLI](https://babeljs.io/docs/usage/cli/) is configured for transpiling
* Includes:
  * [`Yargs`][Yargs] for command-line interfaces, it allows you to create complex commands and sub-commands. For e.g. `mycli init -override`
  * [`Inquirer`][Inquirer] for creating ineractive prompts to capturing user input. It supports various input type like [List](https://github.com/SBoudrias/Inquirer.js#list---type-list), [Checkbox](https://github.com/SBoudrias/Inquirer.js#checkbox---type-checkbox), [Password](https://github.com/SBoudrias/Inquirer.js#password---type-password) etc.
  * [`Chalk`][chalk] to create colorful terminal strings
* Sample code base to quickly get started, with devtools [Babel][Babel], [ESlint](http://eslint.org/) etc. already configured

<a id="packages-used"></a>
# Packages Used

### Dependencies

* [yargs](https://www.npmjs.com/package/yargs)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [chalk](https://www.npmjs.com/package/chalk)

### Dev Dependencies

* [babel-cli](https://www.npmjs.com/package/babel-cli)
* [babel-preset-latest](https://www.npmjs.com/package/babel-preset-latest)
* [babel-preset-stage-2](https://www.npmjs.com/package/babel-preset-stage-2)
* [eslint](https://www.npmjs.com/package/eslint)
* [babel-eslint](https://www.npmjs.com/package/babel-eslint)
* [conventional-changelog-cli](https://www.npmjs.com/package/conventional-changelog-cli)
* [rimraf](https://www.npmjs.com/package/rimraf)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

*   **Sunil Kumar** - [@sun1lkumar](https://twitter.com/sun1lkumar)

See also the list of [contributors](https://github.com/sun1l/dotfiles-generator/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[Yargs]: https://github.com/yargs/yargs
[Inquirer]: https://github.com/tj/commander.js
[Chalk]: https://github.com/chalk/chalk
[Babel]: https://babeljs.io
