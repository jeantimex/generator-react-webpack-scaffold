#React Webpack Scaffold

[![NPM Version](https://img.shields.io/badge/npm-v2%20%7C%20v3-red.svg)](https://www.npmjs.com/package/generator-react-webpack-scaffold)
[![Node Version](https://img.shields.io/badge/node-v4%20%7C%20v5%20%7C%20v6-orange.svg)](https://img.shields.io/badge/node-v4%20%7C%20v5%20%7C%20v6-orange.svg)
[![Build Status](https://travis-ci.org/jeantimex/generator-react-webpack-scaffold.svg?branch=master)](https://travis-ci.org/jeantimex/generator-react-webpack-scaffold)
[![Coverage Status](https://coveralls.io/repos/github/jeantimex/generator-react-webpack-scaffold/badge.svg?branch=master)](https://coveralls.io/github/jeantimex/generator-react-webpack-scaffold?branch=master)

[![NPM](https://nodei.co/npm/generator-react-webpack-scaffold.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/generator-react-webpack-scaffold/)

![Yeoman](http://jinandsu.net/generator-react-webpack-scaffold/yeoman-masthead.png)

A Yeoman generator that scaffolds React project with Webpack, Karma and more useful tools for you to write React application and unit tests.

##How to install

**Step 1**. Install [Yeoman](http://yeoman.io/)
```
$ npm install -g yo
$ npm install -g generator-react-webpack-scaffold
```

**Step 2**. Run `yo react-webpack-scaffold` in an empty project folder
```
$ cd your-empty-project-folder
$ yo react-webpack-scaffold
```

![Demo](http://jinandsu.net/generator-react-webpack-scaffold/command.png)

That's it! Now you have a fully functional React project.

##Features

The scaffolded project has the following features:

- [React](https://facebook.github.io/react/) (ES6 with [Babel](https://babeljs.io/))
- [Webpack](https://webpack.github.io/) and Webpack dev server
- [Sass loader](https://github.com/jtangelder/sass-loader)
- [Karma](https://karma-runner.github.io/1.0/index.html) + [Mocha](https://mochajs.org/) + [Chai](http://chaijs.com/)
- Unit test with [Enzyme](https://github.com/airbnb/enzyme) and [Sinon](http://sinonjs.org/)
- Coverage report [isparta](https://github.com/douglasduteil/isparta)

###1. React

The following features are supported:

**Functional Component**
```javascript
const App = () => (
    <div className='main-app'>
        <h1>Hello, World!</h1>
    </div>
);
```
 
**Class Component**
```javascript
class App extends Component {
    render() {
        return (
            <div className='main-app'>
                <h1>Hello, World!</h1>
            </div>
        );
    }
}
```
 
**Class Properties**
```javascript
class Menu extends Component {
    static propTypes = {
        className: PropTypes.string,
    };
    ...
}
```

**Export Default**
```javascript
export default App;
```

**Import .scss in Component**
```javascript
import './styles.scss';
const App = () => <div />;
```

###2. Webpack dev server
When you run your project by `npm start`, webpack dev server watches the source files for changes and when changes are made the bundle will be recompiled.

###3. Sass loader
You can define styles for individual React components using `import`. The good thing about importing styles is that you can define some base styles and import them for component-level styles.

###4. Unit test
**Assert & Expect**
```javascript
import { assert, expect } from 'chai';
...
```

**Enzyme**
```javascript
import { shallow } from 'enzyme';
describe('Testing', () => {
    it('should render the App', () => {
        const wrapper = shallow(<App />);
        ...
    });
});
```

**Sinon**
```javascript
const sandbox = sinon.sandbox.create();
describe('Testing', () => {
    afterEach(() => sandbox.verifyAndRestore());
    it('should call the callback', () => {
        const callback = sandbox.stub();
        ...
    });
});
```

###5. Coverage Report
Code coverage report is geneated by `istanbul`. `npm run coveralls` will submit the coverage report to [coveralls.io](https://coveralls.io/).

You can setup passing thresholds for statements, branches, functions and lines.

**Example**:
```
==================== Coverage / Threshold summary =============================
Statements   : 100% ( 46/46 ) Threshold : 90%, 4 ignored
Branches     : 100% ( 31/31 ) Threshold : 90%, 13 ignored
Functions    : 100% ( 10/10 ) Threshold : 90%
Lines        : 100% (  6/6  ) Threshold : 90%
================================================================================
```

The HTML and lcov reports can be found in the coverage folder.

##What can you do in the scaffolded project

###1. Run the project
Launch webpack dev server
```
npm start
```
then navigate to `http://localhost:5000` in your browser.

###2. Lint js and scss source codes
ESLint with React linting options have been enabled.
```
npm run lint
```

###3. Unit test
Start Karma test runner.
```
npm run test
```
Coverage report will be generated.

###4. Build the bundle
Build files for production
```
npm run build
```

###5. Clean workspace
Remove dist and coverage folders
```
npm run clean
```
