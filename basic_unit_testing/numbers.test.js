import { it, expect } from "vitest";
import { cleanNumbers } from "./numbers";

it("should return an array of numbers if an array of string number is provided", () => {
    const stringNumber = ["2", "3"];

    const result = cleanNumbers(stringNumber);

    expect(result[0]).toBeTypeOf("number");
});

it("should throw error if at least an empty string is provided", () => {
    const stringNumber = ["", "3"];

    const resultFn = () => cleanNumbers(stringNumber);

    expect(resultFn).toThrow();
});