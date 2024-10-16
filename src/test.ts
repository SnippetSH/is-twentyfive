import { is } from './index';

let n = 24;
console.log(is(n).twentyFive());
console.log(is(n).not.not.roughly.twentyFive());
console.log(is(n).not.within(2).twentyFive());