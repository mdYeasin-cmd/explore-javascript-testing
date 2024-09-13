import { it, expect } from "vitest";
import { add } from "./math";

it("should return the correct sum if an array of numbers is provided", () => {
    // arrange
    const numbers = [1, 2, 3, 4];
    const expectedResult = numbers.reduce((acc, cur) => acc + cur);

    // action
    const result = add(numbers);

    // Assertion
    expect(result).toBe(expectedResult);
});

it("should privide NaN if at least one invalid number is provided", () => {
    // arrange
    const numbers = [1, "invalid", 3, 4];

    // action
    const result = add(numbers);

    // Assertion
    expect(result).toBeNaN();
});

it("should privide correct sum if an array of numeric string is provided", () => {
    // arrange
    const numbers = ["1", "2", "3", "4"];
    const expectedResult = numbers.reduce((acc, cur) => +acc + +cur);

    // action
    const result = add(numbers);

    // Assertion
    expect(result).toBe(expectedResult);
});

it("should throw an error if no argument is passed", () => {
    const resutlFn = () => {
        add();
    }

    expect(resutlFn).toThrow();
});

it("should throw an error if multiple argument is provided", () => {
    const resutlFn = () => {
        add(1, 3, 4);
    }

    expect(resutlFn).toThrow(/is not iterable/i);
});