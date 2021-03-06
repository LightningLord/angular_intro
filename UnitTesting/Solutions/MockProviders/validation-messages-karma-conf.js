module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    // Note the files under test. You will do your work in add-name-spec.js
    files: [
      '../../../common/js/angular/angular.js',
      '../../../common/js/angular-mocks/angular-mocks.js',
      '../../../common/js/angular-messages/angular-messages.js',
      '../../../Forms/lib/js/customer-services.js',
      'validation-messages.js',
      'validation-messages-spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['mocha'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
