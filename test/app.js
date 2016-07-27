'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-webpack-scaffold:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        name: 'My Project',
        desc: 'Some description',
        version: '1.0.0',
        author: 'Yong Su'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.babelrc',
      '.eslintignore',
      '.eslintrc',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      'index.html',
      'karma.config.js',
      'LICENSE',
      'server.js',
      'webpack.config.js',
      'webpack.config.karma.js',
      'webpack.config.production.js',
      'src/app.js',
      'src/index.js',
      'src/styles.scss',
      'src/components/menu.js',
      'src/components/styles.scss',
      'test/test.bundle.js',
      'test/components/menu.spec.js'
    ]);
  });
});
