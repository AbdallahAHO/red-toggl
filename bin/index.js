#!/usr/bin/env node

'use strict';

const CONFIG = require('../lib/config');
const chalk = require('chalk');

var currentNodeVersion = process.versions.node;
if (currentNodeVersion.split('.')[0] < CONFIG.mimNodeVersion) {
  console.error(
    chalk.red(
      `You are running Node ${currentNodeVersion}\n` +
       `This CLI requires Node ${CONFIG.mimNodeVersion} or higher.`
    )
  );
  process.exit(1);
}

require('./cli');
