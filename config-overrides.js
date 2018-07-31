/* config-overrides.js */
var rewireMobX = require('react-app-rewire-mobx');
var rewireTypescript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
  config = rewireTypescript(config, env);
  config = rewireMobX(config, env);
  
  return config;
}