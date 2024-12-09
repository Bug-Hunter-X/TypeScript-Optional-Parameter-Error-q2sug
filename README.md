# TypeScript Optional Parameter Bug

This repository demonstrates a common TypeScript error related to optional parameters in function interfaces.  The `printName` function attempts to access the `lastName` property which is optional. TypeScript correctly flags this as a potential error because if `lastName` is undefined, accessing it will throw an error.

The `bug.ts` file contains the buggy code.  The `bugSolution.ts` file provides a solution demonstrating how to handle optional properties safely.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` and run it using a TypeScript compiler (e.g., `tsc bug.ts` and `node bug.js`).
3. Observe the TypeScript compiler error.

## Solution

The solution involves safely handling the optional `lastName` property using optional chaining or nullish coalescing.