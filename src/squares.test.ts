import { squares, cubes } from "./squares";

test("Calculate squares", () => {
    expect(squares([1, 2, 3, 4])).toStrictEqual([1, 4, 9, 16]);
});

test("Calculate cubes", () => {
    expect(cubes([1, 2, 3, 4])).toStrictEqual([1, 8, 27, 64]);
});