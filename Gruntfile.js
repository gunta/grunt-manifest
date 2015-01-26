/*
 * grunt-manifest
 * https://github.com/gunta/grunt-manifest
 *
 * Copyright (c) 2013 Gunther Brunner, contributors
 * Licensed under the MIT license.
 * https://github.com/gunta/grunt-manifest/blob/master/LICENSE-MIT
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'tasks/*.js', '<%= nodeunit.tests %>'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: ['tmp']
    },

    // Configuration to be run (and then tested).
    manifest: {
      generate: {
        options: {
          basePath: 'test/fixtures',
          timestamp: false,
          hash: true
        },
        src: [
          '*.js',
          '*.css',
          'folder_one/*',
          'folder_two/*.js',
          'folder_two/*.css'
        ],
        dest: 'tmp/manifest.appcache'
      },
      master1: {
        options: {
          basePath: 'test/fixtures',
          timestamp: false,
          hash: true,
          master: 'master1.html'
        },
        src: [
          '*.js',
          '*.css',
          'folder_one/*',
          'folder_two/*.js',
          'folder_two/*.css'
        ],
        dest: 'tmp/manifest1.appcache'
      },
      master1and2: {
        options: {
          basePath: 'test/fixtures',
          timestamp: false,
          hash: true,
          master: ['master1.html', 'master2.html']
        },
        src: [
          '*.js',
          '*.css',
          'folder_one/*',
          'folder_two/*.js',
          'folder_two/*.css'
        ],
        dest: 'tmp/manifest2.appcache'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // The clean plugin helps in testing.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the 'test' task is run, first clean the 'tmp' dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'manifest', 'nodeunit', 'clean']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);
};
