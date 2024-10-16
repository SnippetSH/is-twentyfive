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
                return n === 'twentyfive';
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
                    return n === 'twentyfive' || n === 'twenty-five';
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
                    return n === 'twentyfive' || n === 'twenty-five';
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
        not: check as IIs // 체이닝을 위해 다시 원래 상태로 돌아가기

    }
    return check as IIs;
}

export function make() {
    console.log("todo");
}
