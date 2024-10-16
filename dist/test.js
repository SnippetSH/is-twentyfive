"use strict";
// import { is, makeTwentyFive } from './index';
const { is, makeTwentyFive } = require('./index');
let n = 24;
console.log(is(n).twentyFive());
console.log(is(n).not.not.roughly.twentyFive());
console.log(is(n).not.within(2).twentyFive());
console.log(makeTwentyFive().number());
console.log(makeTwentyFive().string(true));
console.log(makeTwentyFive().string(false));
console.log(makeTwentyFive().array(0));
console.log(makeTwentyFive().array(10));
console.log(makeTwentyFive().object());
console.log(makeTwentyFive().object(10));
