[npm-badge]: https://img.shields.io/npm/v/is-logger.svg
[npm-badge-url]: https://www.npmjs.com/package/is-logger
[npm-downloads-badge]: https://img.shields.io/npm/dt/is-logger.svg
[npm-downloads-url]: https://npmjs.org/package/is-logger
[travis-badge]: https://img.shields.io/travis/9fv/node-is-logger/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/9fv/node-is-logger
[circle-badge]: https://circleci.com/gh/9fv/node-is-logger/tree/master.svg?style=svg&circle-token=
[circle-badge-url]: https://circleci.com/gh/9fv/node-is-logger/tree/master
[coveralls-badge]: https://coveralls.io/repos/github/9fv/node-is-logger/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/9fv/node-is-logger?branch=master
[codeclimate-badge]: https://img.shields.io/codeclimate/github/9fv/node-is-logger.svg
[codeclimate-badge-url]: https://codeclimate.com/github/9fv/node-is-logger
[ember-observer-badge]: http://emberobserver.com/badges/node-is-logger.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/node-is-logger
[license-badge]: https://img.shields.io/npm/l/is-logger.svg
[license-badge-url]: LICENSE.md
[dependencies-badge]: https://img.shields.io/david/9fv/node-is-logger.svg
[dependencies-badge-url]: https://david-dm.org/9fv/node-is-logger
[devDependencies-badge]: https://img.shields.io/david/dev/9fv/node-is-logger.svg
[devDependencies-badge-url]: https://david-dm.org/9fv/node-is-logger#info=devDependencies
[greenkeeper-badge]: https://badges.greenkeeper.io/9fv/node-is-logger.svg
[greenkeeper-badge-url]: https://greenkeeper.io/



node-is-logger
==============

[![Latest NPM release][npm-badge]][npm-badge-url]
[![NPM Downloads][npm-downloads-badge]][npm-downloads-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Test Coverage][coveralls-badge]][coveralls-badge-url]
[![Code Climate][codeclimate-badge]][codeclimate-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url] 
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper-badge-url]


## Table of Contents

* [Synopsis](#synopsis)
* [Usage](#usage)
* [Installation](#installation)
* [API Reference](#api-reference)
* [Tests](#tests)
  * [Run unit tests](#tests_run-unit-tests)
* [Compatibility](#compatibility)
  * [Node](#compatibility_node)
  * [Browser](#compatibility_browser)
* [Contributing](#issues)
* [Contributing](#contributing)
* [Credits](#credits)
* [History](#history)
* [License](#license)

## <a name="synopsis"> Synopsis

Verify if a value seems or is a logger, including "standardized" methods: `debug`, `info`, `error`... - _as [Bunyan](https://github.com/trentm/node-bunyan) or [Winston](https://github.com/winstonjs/winston)_.

## <a name="usage"> Usage

```javascript
   const isLogger = require('is-logger');
   const bunyan = require('bunyan');

   const LOG = bunyan.createLogger({name: __filename});
   const FAKE_LOG = {name: 'I am a fake logger!'};

   console.log(isLogger(LOG))
   # >>> return true: LOG is a logger.

   console.log(isLogger(FAKE_LOG);
   # >>> return false: FAKE_LOG is not a logger.

   console.log(isLogger(FAKE_LOG, {throwOnFalse: true});
   # >>> throw an error of type `IsNotLoggerError`: FAKE_LOG is not a logger.

```

## <a name="installation"> Installation

    npm install is-logger

## <a name="api-reference"> API Reference

Please refer to [API documentation](docs/API.md).

## <a name="test"> Tests

### <a name="tests_run-unit-tests"> Run unit tests

    npm test

## <a name="compatibility"> Compatibility

### <a name="compatibility_node"> Node

Tested using [Node v9.4.0](https://nodejs.org/dist/v9.4.0/docs/api/).

### <a name="compatibility_browser"> Browser

Untested at this time.

## <a name="issues"> Issues

Feel free to submit issues and enhancement requests.

## <a name="contributing"> Contributing

Please refer to project's style guidelines and guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes

**NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## <a name="credits"> Credits

## <a name="history"> History

### v0.1.1 (2018-02-08)

* [Update require-dir to the latest version](https://github.com/9fv/node-is-logger/pull/4)

### v0.1.0 (2018-01-28)

Fix bug: bad entry point in `package.json`.

### v0.1.0-beta2 (2018-01-28)

Fix badges & documentation.

### v0.1.0-beta1 (2018-01-28)

Fix bugs: invalid NPM badge.

### v0.1.0-alpha2 (2018-01-28)

Finalizing code, tests and automated generation of documentation.

### v0.1.0-alpha1 (2018-01-24)

Initial version.

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
