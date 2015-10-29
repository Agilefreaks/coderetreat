// Contents of: config/karma.conf.js
module.exports = function (config) {
  config.set({
    basePath : './',

    autoWatch: true,
    singleRun: false,
    colors: true,

    browserNoActivityTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserDisconnectTolerance: 2,
    
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    frameworks : ["jasmine"],

    browsers: ['PhantomJS'],

    reporters: ['progress'],

    files : [
      'lib/**/*.js',
      'spec/**/*Spec.js'
    ]    
  });
}