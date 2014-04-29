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
      dest = filePair.dest || 'manifest.appcache'

      # check to see if src has been set
      if (typeof filePair.src is 'undefined')
        grunt.fatal('Need to specify which files to include in the manifest.', 2)

      # if a basePath is set, expand using the original file pattern
      if (options.basePath)
        src = grunt.file.expand({ cwd: options.basePath }, filePair.orig.src)
      else
        src = filePair.src

      # Exclude files
      if (options.exclude)
        src = src.filter (fileName) ->
          return options.exclude.indexOf(fileName) is -1

      appcache = new AppCacheFile(src, dest, options)

      grunt.verbose.writeln('\n' + (appcache.output).yellow)
      grunt.file.write(dest, appcache.output)
      grunt.log.writeln('File "' + dest + '" created.')
      done()
