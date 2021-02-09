# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @samirabani/lotide`

**Require it:**

`const _ = require('@samirabani/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `function1(assertArraysEqual)`: asserts the equality of two array\
- `function2(assertEqual)`: asserts the equality of two input\
- `function3(assertObjectsEqual)`: asserts the equality of two given objects\
- `function3(countLetters)`: counts the repetition of a letter in a string\
- `function3(countOnly)`: counts the repetition of an item in an array\
- `function3(eqArrays)`: compares two arrays\
- `function3(eqObjects)`: compares two objects\
- `function3(findKey)`: searches for an item in an object and returns its key\
- `function3(findKeyByValue)`: finds corresponding key with a value in an object\
- `function3(head)`: returns first item of an array\
- `function3(letterPositions)`: finds position of a letter in a string\
- `function3(map)`: returns an array of first letters in original array\
- `function3(middle)`: returns middle item(s) of an array\
- `function3(tail)`: returns given array except the first item\
- `function3(takeUntil)`: returns all items in an array until a specific item\
- `function3(without)`: returns a sub-array of the original array\
