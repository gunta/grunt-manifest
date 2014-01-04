'use strict';

var grunt = require('grunt');

exports.manifest = {
  generate: function (test) {
    test.expect(4);

    var actual = grunt.file.read('tmp/manifest.appcache');
    var expected = grunt.file.read('test/expected/manifest.appcache');

    test.equal(actual, expected, 'should generate a cache manifest.');

    actual = grunt.file.read('tmp/manifest1.appcache');
    expected = grunt.file.read('test/expected/manifest1.appcache');

    test.equal(actual, expected, 'should generate a cache manifest (with master1.html as master).');

    actual = grunt.file.read('tmp/manifest2.appcache');
    expected = grunt.file.read('test/expected/manifest2.appcache');

    test.equal(actual, expected, 'should generate a cache manifest (with master1.html & master2.html as masters).');

    // Test for new excludeDir options and
    // globbing patterns used in exclude options
    actual = grunt.file.read('tmp/manifest3.appcache');
    expected = grunt.file.read('test/expected/manifest3.appcache');

    test.equal(actual, expected, 'should exclude directory and .html files');

    test.done();
  }
};
