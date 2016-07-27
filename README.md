# React Webpack Scaffold

[![Node version](https://img.shields.io/badge/node-v4%20%7C%20v5%20%7C%20v6-orange.svg)](https://img.shields.io/badge/node-v4%20%7C%20v5%20%7C%20v6-orange.svg)
[![Build Status](https://travis-ci.org/jeantimex/generator-react-webpack-scaffold.svg?branch=master)](https://travis-ci.org/jeantimex/generator-react-webpack-scaffold)

![Yeoman](http://jinandsu.net/generator-react-webpack-scaffold/yeoman-masthead.png)

A Yeoman generator that scaffolds React application with Webpack.

##How to use##

**Step 1**. Install [Yeoman](http://yeoman.io/)
```
npm install -g yo
```

**Step 2**. Clone this project, inside the project, run
```
npm link
```
At the time of writing, this generator is not in Yeoman generator list yet, once it's there, step 2 can be skipped.

**Step 3**. Run `react-webpack-scaffold` in your other project folder
```
yo react-webpack-scaffold
```

![Demo](http://jinandsu.net/generator-react-webpack-scaffold/command.png)

That's it! Now you have a fully functional React project with the following features:

- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/) and Webpack dev server
- ES6 with [Babel](https://babeljs.io/)
- Sass loader
- [Karma](https://karma-runner.github.io/1.0/index.html) + [Mocha](https://mochajs.org/)
- Coverage report [isparta](https://github.com/douglasduteil/isparta)
- Test with [Enzyme](https://github.com/airbnb/enzyme) and [Sinon](http://sinonjs.org/)

## React

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

##Test##

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

##Coverage Report

Code coverage report is geneated by `istanbul`. `npm run coveralls` will submit the coverage report to coveralls.io.

**Example**:
```
==================== Coverage / Threshold summary =============================
Statements   : 100% ( 46/46 ) Threshold : 90%, 4 ignored
Branches     : 100% ( 31/31 ) Threshold : 90%, 13 ignored
Functions    : 100% ( 10/10 ) Threshold : 90%
Lines        : 100% (  6/6  ) Threshold : 90%
================================================================================
```

HTML and lcov reports can be found in the coverage folder.

## How to use this package
Download or clone the package, then
```
npm install
npm start
```
navigate to `http://localhost:5000` in your browser.

## Linting
ESLint with React linting options have been enabled.
```
npm run lint
```

## Testing
Start Karma test runner.
```
npm run test
```

## Building
Build files for production
```
npm run build
```

## Clean
Remove dist and coverage folders
```
npm run clean
```
