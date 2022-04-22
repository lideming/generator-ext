declare global {
    interface Generator<T> {
        filter(fn: (value: T, index: number) => any): Generator<T>;
        map<Result>(fn: (value: T, index: number) => Result): Generator<Result>;
        flat(): Generator<T>;
        flatMap<Result>(fn: (value: T, index: number) => Result): Generator<FlatArray<Result, 1>>;
        reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): Generator<T>;
        toArray(): T[];
    }
}

export function range(end: number): Generator<number>;
export function range(begin: number, end: number): Generator<number>;
export function range(begin: number, end: number, step: number): Generator<number>;
