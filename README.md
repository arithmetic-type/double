[js-number](http://aureooms.github.io/js-number)
==

Primitive number type arithmetic code bricks for JavaScript. Parent is
[aureooms/js-library](https://github.com/aureooms/js-library).

```js
mul( 6 , 7 ) ; // 42
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-number.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-number/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-number.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-number)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-number.svg?style=flat)](http://bower.io/search/?q=aureooms-js-number)
[![Build Status](http://img.shields.io/travis/aureooms/js-number.svg?style=flat)](https://travis-ci.org/aureooms/js-number)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-number.svg?style=flat)](https://coveralls.io/r/aureooms/js-number)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-number.svg?style=flat)](https://david-dm.org/aureooms/js-number#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-number.svg?style=flat)](https://david-dm.org/aureooms/js-number#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-number.svg?style=flat)](https://codeclimate.com/github/aureooms/js-number)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-number.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-number)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-number.svg?style=flat)](https://github.com/aureooms/js-number/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-number.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-number)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-number
# or
jspm install npm:aureooms-js-number
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-number
```

### bower
```terminal
bower install aureooms-js-number
```

### ender
```terminal
ender add aureooms-js-number
```

### jam
```terminal
jam install aureooms-js-number
```

### spm
```terminal
spm install aureooms-js-number --save
```

### npm
```terminal
npm install aureooms-js-number --save
```

## Require
### jspm
```js
let number = require( "github:aureooms/js-number" ) ;
// or
import number from 'aureooms-js-number' ;
```
### duo
```js
let number = require( "aureooms/js-number" ) ;
```

### component, ender, spm, npm
```js
let number = require( "aureooms-js-number" ) ;
```

### bower
The script tag exposes the global variable `number`.
```html
<script src="bower_components/aureooms-js-number/js/dist/number.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-number" ] , function ( number ) { ... } ) ;
```
