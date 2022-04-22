# JS Generator Extension

Array-like methods for generators.

## Background

In C# and Python, we can do some operations on an iterator and get chained generators.

<details open>
<summary>Python Example</summary>

```python
(x * 10 for x in range(10) if x % 2 == 1)
# got a generator for [10, 30, 50, 70, 90]
```

</details>

<details>
<summary>C# Example (click to expand)</summary>

```csharp
Enumerable.Range(0, 10)
    .Where(x => x % 2 == 1)
    .Select(x => x * 10)
// got a iterator for [10, 30, 50, 70, 90]
// using LINQ extension methods

from x in Enumerable.Range(0, 10)
    where x % 2 == 1
    select x * 10
// the same, using LINQ query syntax
```

</details>

Currently, to do the same thing in JavaScript:

```javascript
new Array(10).fill(0).map((x, i) => i)
  .filter(x => x % 2 == 1)
  .map(x => x * 10)
```

There are a few disadvantages:

- `new Array(n).fill(...).map(...)` is too long and confusing
- 3 intermediate arrays are created (`new Array()`, the first `map()`, `filter()`)

## Getting Started

```bash
npm install generator-ext
```

```javascript
import { range } from "generator-ext";

[...range(10).filter(x => x % 2 == 1).map(x => x * 10)]
```

- We have `range()` to get a Python-like range generator
- We can call methods like `map()` on any generator, retuning chained generator
- They are just (chained) generators. We can call `toArray()` on the generator to get the result as array, without any intermediate arrays.
  - `[...generator]` also works.

## Methods for Generators

These methods are added to the prototype of [GeneratorFunction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction):

- Array-like methods (`map`, `filter`, `flat`, `flatMap`, `reduce`)
    - are identical to Array builtins, excepts they return generators instead of arrays.

- `toArray` method

## `range` Generator Function

Generates a number sequences. It's similar to `range` in Python.

```javascript
range(10)
// generator for [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(3, 10)
// generator for [3, 4, 5, 6, 7, 8, 9]

range(3, 10, 2)
// generator for [3, 5, 7, 9]
```
