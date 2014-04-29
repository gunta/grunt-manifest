grunt = require('grunt')

exports.manifest =
  generate: (test) ->
    test.expect(3)

    actual = grunt.file.read('tmp/manifest.appcache')
    expected = grunt.file.read('test/expected/manifest.appcache')

    test.equal(actual, expected, 'should generate a cache manifest.')

    actual = grunt.file.read('tmp/manifest1.appcache')
    expected = grunt.file.read('test/expected/manifest1.appcache')

    test.equal(actual, expected, 'should generate a cache manifest (with master1.html as master).')

    actual = grunt.file.read('tmp/manifest2.appcache')
    expected = grunt.file.read('test/expected/manifest2.appcache')

    test.equal(actual, expected, 'should generate a cache manifest (with master1.html & master2.html as masters).')

    test.done()
