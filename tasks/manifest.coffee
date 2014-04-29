#
# grunt-manifest
# https://github.com/gunta/grunt-manifest
#
# Copyright (c) 2014 Gunther Brunner, Ashley Brener, contributors
# Licensed under the MIT license.
# https://github.com/gunta/grunt-manifest/blob/master/LICENSE-MIT
#

module.exports = (grunt) ->
  AppCacheFile = require('../lib/appcachefile')(grunt)

  grunt.registerMultiTask 'manifest', 'Generate HTML5 cache manifest', ->
    done = @async()
    options = @options
      verbose: true
      timestamp: true

    grunt.verbose.writeflags(options, 'Options')

    for filePair in @files
      appcache = new AppCacheFile(filePair, options)
      appcache.createFile()
      grunt.verbose.writeln('\n' + (appcache.output).yellow)
      done()
