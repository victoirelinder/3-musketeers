#!/usr/bin/env node

// list of modules
const Conf = require('conf');
const helpers = require('./helpers.js');
const cash = require('./cash.js');

const config = new Conf();

// get all the given parameters

const argv = process.argv.slice(2);
// it calls "helpers" which is a module , with the parameter argv 
helpers(argv);

const command = {
  'amount': argv[0] || 1,
  'from': argv[1] || config.get('defaultFrom', 'USD'),
  'to':
    argv.length > 2
      ? process.argv.slice(4)
      : config.get('defaultTo', ['USD', 'EUR', 'GBP', 'PLN'])
};
// it calls "cash " which is a module , with the parameter argv 
cash(command);
