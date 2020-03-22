# Autocomplete-ts
Advanced React based autocomplete library. Similar to Google's autocomplete.

[![License: MIT](https://img.shields.io/github/license/shra1dhar/autocomplete-ts?color=blue)](https://img.shields.io/github/license/shra1dhar/autocomplete-ts) [![npm version](https://badge.fury.io/js/autocomplete-ts.svg)](https://badge.fury.io/js/autocomplete-ts) [![Build Status](https://travis-ci.org/shra1dhar/autocomplete-ts.svg?branch=master)](https://travis-ci.org/shra1dhar/autocomplete-ts) [![PRs: Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen)](https://github.com/shra1dhar/autocomplete-ts)

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
```bash
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

Add this css to your project:
```css
:root {
	--ac-ts-input-height:  25px;
	--ac-ts-input-width:  300px;
	--ac-ts-input-fontSize:  .9em;
	--ac-ts-input-suggest-color:  #bbb;
	--ac-ts-input-suggest-bgColor:  #fff;
	--ac-ts-input-color:  #333;
	--ac-ts-input-active-bgColor:  #fff;
	--ac-ts-input-disabled-bgColor:  #ccc;
	--ac-ts-input-border-focus:  inherit;
	--ac-ts-input-padding:  5px;
	--ac-ts-input-borderRadius:  5px;
	--ac-ts-input-border:  1px  solid  #ccc;
}

.autocomplete--fill-input  .autocomplete--input-suggestion {
	background-color:  var(--ac-ts-input-suggest-bgColor);
	position:  absolute;
	z-index:  -10;
	color:  var(--ac-ts-input-suggest-color);
}

.autocomplete--fill-input  .autocomplete--input-suggestion:disabled {
	background-color:  var(--ac-ts-input-disabled-bgColor);
}

.autocomplete--fill-input  .autocomplete--input-active {
	background-color:  transparent;
	color:  var(--ac-ts-input-color);
	z-index:  10;
}

.autocomplete--fill-input  .autocomplete--input-active:disabled {
	background-color:  transparent;
}

.autocomplete--fill-input  .autocomplete--input-active:focus {
	border-color:  var(--ac-ts-input-border-focus);
}

.autocomplete--fill-input  .autocomplete--input-suggestion,
.autocomplete--fill-input  .autocomplete--input-active {
	padding:  var(--ac-ts-input-padding);
	border:  var(--ac-ts-input-border);
	height:  var(--ac-ts-input-height);
	width:  var(--ac-ts-input-width);
	font-size:  var(--ac-ts-input-fontSize);
	border-radius:  var(--ac-ts-input-borderRadius);
}
```

## Contributing

I've just started out with this library and plan to incrementally add tests and other functionality which the community will ask for. I'll be spending the next few weeks solely to this project to achieve that. Hard Core mode on :fire:

Tests would be based on Jest and can be run with `npm run test`

To build the library run `npm run build`

## Further

I'll be dedicating a website with an indepth docs and code sandboxes to use this library. In the meantine, feel free to raise bugs or request for feature/enhancements. Please follow proper guidelines to do so. Cheers :grin:

