/*
 * grunt-manifest
 * https://github.com/gunta/grunt-manifest
 *
 * Copyright (c) 2013 Gunther Brunner, contributors
 * Licensed under the MIT license.
 * https://github.com/gunta/grunt-manifest/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {
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
					timestamp: false,
					cache: ['external/lib.js']
				},
				cwd: 'test/fixtures',
				src: '**',
				filter: 'isFile',
				dest: 'tmp/manifest.appcache'
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