/*! generator-ext by lideming with MIT License */
"use strict";

Object.assign(Object.getPrototypeOf(function* () { }).prototype, {
    toArray() {
        return [...this];
    },
    * map(fn) {
        var i = 0;
        for (var it of this) {
            yield fn(it, i++);
        }
    },
    * filter(fn) {
        var i = 0;
        for (var it of this) {
            var r = fn(it, i++);
            if (r) yield it;
        }
    },
    * flat(depth = 1) {
        for (var it of this) {
            if (it && it[Symbol.iterator]) {
                for (var x of it) {
                    if (depth > 1) {
                        yield* it.flat(depth - 1);
                    } else {
                        yield x;
                    }
                }
            } else {
                yield it;
            }
        }
    },
    flatMap(fn) {
        return this.map(fn).flat();
    },
    reduce(fn, initial) {
        var i = 0;
        if (arguments.length == 2) {
            for (var it of this) {
                initial = fn(initial, it, i++);
            }
        } else {
            /** @type {Iterator} */
            var iterator = this[Symbol.iterator]();
            var r = iterator.next();
            if (r.done) throw new TypeError('Reduce of empty iterator with no initial value');
            initial = r.value;
            i++;
            while (true) {
                r = iterator.next();
                if (r.done) break;
                initial = fn(initial, r.value, i++);
            }
        }
        return initial;
    },
});

export function* range(begin, end, step) {
    if (!step) step = 1;
    if (end === undefined) {
        end = begin;
        begin = 0;
    }
    for (var i = begin; i < end; i += step) {
        yield i;
    }
}

