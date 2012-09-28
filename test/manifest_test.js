var grunt = require('grunt');

exports['manifest'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(1);

    expect = grunt.file.read("test/expected/manifest.appcache");
    result = grunt.file.read("tmp/manifest.appcache");

    test.equal(expect, result, "should generate a cache manifest");

    test.done();

  }
};