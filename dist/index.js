"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = is;
exports.makeTwentyFive = makeTwentyFive;
function is(n) {
    const check = {
        twentyFive: () => {
            if (typeof n === 'number') {
                return n === 25;
            }
            else if (Array.isArray(n)) {
                if (n.length !== 25 && n.length > 0) {
                    return n.every((num) => num === 25);
                }
                return n.length === 25;
            }
            else if (typeof n === 'object') {
                return Object.keys(n).length === 25;
            }
            else if (typeof n === 'string') {
                n = n.replaceAll(' ', '');
                n = n.toLowerCase();
                return n === 'twentyfive' || n === '25';
            }
            return false;
        },
        roughly: {
            twentyFive: () => {
                if (typeof n === 'number') {
                    return n >= 24.5 && n <= 25.5;
                }
                else if (Array.isArray(n)) {
                    return n.length === 25 || n.every((num) => num >= 24.5 && num <= 25.5);
                }
                else if (typeof n === 'object') {
                    return Object.keys(n).length >= 24 && Object.keys(n).length <= 26;
                }
                else if (typeof n === 'string') {
                    n = n.replaceAll(' ', '');
                    n = n.toLowerCase();
                    return n === 'twentyfive' || n === 'twenty-five' || n === '25';
                }
                return false;
            }
        },
        within: (y) => ({
            twentyFive: () => {
                if (typeof n === 'number') {
                    return n >= 25 - y && n <= 25 + y;
                }
                else if (Array.isArray(n)) {
                    return n.length >= 25 - y && n.length <= 25 + y || n.every((num) => num >= 25 - y && num <= 25 + y);
                }
                else if (typeof n === 'object') {
                    return Object.keys(n).length >= 25 - y && Object.keys(n).length <= 25 + y;
                }
                else if (typeof n === 'string') {
                    n = n.replaceAll(' ', '');
                    n = n.toLowerCase();
                    return n === 'twentyfive' || n === 'twenty-five' || n === '25';
                }
                return false;
            }
        }),
    };
    check.not = {
        twentyFive: () => !check.twentyFive(),
        roughly: {
            twentyFive: () => !check.roughly.twentyFive()
        },
        within: (y) => ({
            twentyFive: () => !check.within(y).twentyFive()
        }),
        not: check
    };
    return check;
}
function makeTwentyFive() {
    const makeSome = {
        number: () => 25,
        string: (n) => {
            if (n) {
                return '25';
            }
            else {
                return 'twentyfive';
            }
        },
        array: (n) => {
            if (n) {
                return Array(n).fill(25);
            }
            else if (n === 0) {
                return [];
            }
            else {
                return Array(25).fill(25);
            }
        },
        object: (n) => {
            const result = {};
            const count = n ? n : 25;
            for (let i = 1; i <= count; i++) {
                result[i] = 25;
            }
            return result;
        }
    };
    return makeSome;
}
