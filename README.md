# Autocomplete-ts
Advanced React based autocomplete library. Similar to Google's autocomplete.

[![License: MIT](https://img.shields.io/github/license/shra1dhar/autocomplete-ts?color=blue)](https://img.shields.io/github/license/shra1dhar/autocomplete-ts) [![npm version](https://badge.fury.io/js/autocomplete-ts.svg)](https://badge.fury.io/js/autocomplete-ts)

### Demo GIF
<img src="https://github.com/shra1dhar/autocomplete-ts/blob/master/asset/demo.gif?raw=true" width="370" alt=""/>

## Features
 - [x] Lightweight
 - [x] Supports React
 - [x] Dependency-free
 - [x] Support for typescript
 - [x] Easy Configurable and use

#### Core Features
 - Quick auto suggestion (under 5 ms for a set of 4000 keywords)
 - Adding server generated suggestions (NLP based model etc.)
 - WAI ARIA support for accessibility (adding more)
 - Strict Type checks and declarations for typescript


## Quick Start

### Installation
Download and install via [npm package manager](https://www.npmjs.com/package/autocomplete-ts)
```js
npm i autocomplete-ts
```
```jsx
// import like this
import AutoComplete from  'autocomplete-ts';

// or like this
const autoComplete = require('autocomplete-ts');
```

```jsx

const countries = ['Australia', 'China', 'Denmark', 'India', 'Russia', 'South Africa', 'USA'];

// render method
render() {
	return <AutoComplete  suggestList={countries}  />
}
```

## Contributing

I've just started out with this library and plan to incrementally add tests and other functionality which the community will ask for. I'll be spending the next few weeks solely to this project to achieve that. Hard Core mode on :fire:

Tests would be based on Jest and can be run with `npm run test`

To build the library run `npm run build`

## Further

I'll be dedicating a website with an indepth docs and code sandboxes to use this library. In the meantine, feel free to raise bugs or request for feature/enhancements. Please follow proper guidelines to do so. Cheers :grin:

