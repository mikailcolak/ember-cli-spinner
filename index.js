'use strict';

module.exports = {
  name: require('./package').name,
  included: app => {
    app.import('vendor/ember-cli-spinner.css');
    app.import('vendor/spinners/all.css');
  }
};
