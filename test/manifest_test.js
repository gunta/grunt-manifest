'use strict';

var grunt = require('grunt');

exports.manifest = {
  generate: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/manifest.appcache');
    var expected = grunt.file.read('test/expected/manifest.appcache');

    test.equal(actual, expected, 'should generate a cache manifest.');

    test.done();
  }
};