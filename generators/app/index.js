'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous ' + chalk.red('generator-react-webpack-scaffold') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, {
      type: 'input',
      name: 'desc',
      message: 'Description',
      default: 'About this project'
    }, {
      type: 'input',
      name: 'version',
      message: 'Version',
      default: '1.0.0'
    }, {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: 'Your name'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // Copy all non-dotfiles
    this.fs.copy(
      this.templatePath('static/**/*'),
      this.destinationRoot()
    );

    // Copy all dotfiles
    this.fs.copy(
      this.templatePath('static/.*'),
      this.destinationRoot()
    );

    // Copy package.json
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        name: this.props.name,
        desc: this.props.desc,
        author: this.props.author,
        version: this.props.version
      }
    );

    // Copy README.md
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        name: this.props.name,
        desc: this.props.desc
      }
    );
  },

  install: function () {
    this.npmInstall();
  }
});
