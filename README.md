# is-twentyfive

Check if a number/array/object/string is twenty-five

## Installation
```bash
npm i is-twentyfive
```

## Usage
```ts
const { is } = require('is-twentyfive');

console.log(is(24).not.twentyFive()); // true
console.log(is(25).twentyFive()); // true
console.log(is(24.5).roughly.twentyFive()); // true
console.log(is(26).within(2).twentyFive()); // true
```
