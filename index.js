module.exports = function(options, imports, register) {

  var request = require('request');

  register(null, {request:request});

};
