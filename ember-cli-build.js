/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // CSS
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/MDBootstrap/css/mdb.css');
  app.import('vendor/css/switchery.css');

  // JS
  app.import('bower_components/jquery/dist/jquery.js');
  app.import('bower_components/popper.js/dist/umd/popper.js');
  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/MDBootstrap/js/mdb.js');
  app.import('bower_components/parallax.js/parallax.js');
  app.import('vendor/js/switchery.js');
  app.import('vendor/js/mousetrap.js');

  return app.toTree();
};
