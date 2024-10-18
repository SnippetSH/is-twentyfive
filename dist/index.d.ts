export interface IIs {
    twentyFive: () => boolean;
    roughly: {
        twentyFive: () => boolean;
    };
    within: (y: number) => {
        twentyFive: () => boolean;
    };
    not: IIs;
}
export declare function is(n: number | number[] | object | string): IIs;
interface IMake {
    number: () => number;
    string: (n: boolean | null) => string;
    array: (n: number | null) => number[];
    object: (n: number | null) => {
        [key: number]: number;
    };
}
export declare function makeTwentyFive(): IMake;
export {};
