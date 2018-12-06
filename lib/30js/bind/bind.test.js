const bind = require('./bind.js');

function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}

