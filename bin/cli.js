'use strict';

let program = require('commander');

require('./options')(program);
require('./commands/index')(program);
require('./commands/mkdir')(program);
require('./commands/ls')(program);
require('./commands/rm')(program);

program.parse(process.argv);
