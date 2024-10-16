export interface IIs {
    twentyFive: () => boolean;
    roughly: {
        twentyFive: () => boolean;
    };
    within: (y: number) => { twentyFive: () => boolean };
    not: IIs;
}

export function is(n: number | number[] | object | string): IIs {
    const check: Partial<IIs> = {
        twentyFive: () => {
            if (typeof n === 'number') {
                return n === 25;
            } else if (Array.isArray(n)) {
                if (n.length !== 25 && n.length > 0) {
                    return n.every((num) => num === 25);
                }
                return n.length === 25;
            } else if (typeof n === 'object') {
                return Object.keys(n).length === 25;
            } else if (typeof n === 'string') {
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
                } else if (Array.isArray(n)) {
                    return n.length === 25 || n.every((num) => num >= 24.5 && num <= 25.5);
                } else if (typeof n === 'object') {
                    return Object.keys(n).length >= 24 && Object.keys(n).length <= 26;
                } else if (typeof n === 'string') {
                    n = n.replaceAll(' ', '');
                    n = n.toLowerCase();
                    return n === 'twentyfive' || n === 'twenty-five' || n === '25';
                }
                return false;
            }
        },
        within: (y: number) => ({
            twentyFive: (): boolean => {
                if (typeof n === 'number') {
                    return n >= 25 - y && n <= 25 + y;
                } else if (Array.isArray(n)) {
                    return n.length >= 25 - y && n.length <= 25 + y || n.every((num) => num >= 25 - y && num <= 25 + y);
                } else if (typeof n === 'object') {
                    return Object.keys(n).length >= 25 - y && Object.keys(n).length <= 25 + y;
                } else if (typeof n === 'string') {
                    n = n.replaceAll(' ', '');
                    n = n.toLowerCase();
                    return n === 'twentyfive' || n === 'twenty-five' || n === '25';
                }
                return false;
            }
        }),
    }
    check.not = {
        twentyFive: () => !(check as IIs).twentyFive(),
        roughly: {
            twentyFive: () => !(check as IIs).roughly.twentyFive()
        },
        within: (y: number) => ({
            twentyFive: () => !(check as IIs).within(y).twentyFive()
        }),
        not: check as IIs

    }
    return check as IIs;
}

interface IMake {
    number: () => number;
    string: (n: boolean | null) => string;
    array: (n: number | null) => number[];
    object: (n: number | null) => { [key: number]: number };
}

export function makeTwentyFive(): IMake {
    const makeSome: IMake = {
        number: () => 25,
        string: (n: boolean | null) => {
            if (n) {
                return '25';
            } else {
                return 'twentyfive';
            }
        },
        array: (n: number | null) => {
            if (n) {
                return Array(n).fill(25);
            } else if (n === 0) {
                return [];
            } else {
                return Array(25).fill(25);
            }
        },
        object: (n: number | null) => {
            const result: { [key: number]: number } = {};
            const count = n ? n : 25;
            for (let i = 1; i <= count; i++) {
                result[i] = 25;
            }
            return result;
        }
    }

    return makeSome;
}
