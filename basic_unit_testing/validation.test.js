import { it, expect, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe("validateEmail()", () => {
    it("should validate a correct email address", () => {
        const email = "example@email.com";

        const resultFn = () => validateEmail(email);

        expect(resultFn).not.toThrow();
    });

    it("should throw an error if an invalid email is passed", () => {
        const email = "example";

        const resultFn = () => validateEmail(email);

        expect(resultFn).toThrow();
    });

    it("should throw an error if an empty string is passed", () => {
        const email = "example";

        const resultFn = () => validateEmail(email);

        expect(resultFn).toThrow();
    });

    it("throws an error for a null email address", () => {
        expect(() => validateEmail(null)).toThrow("Invalid email address.")
    });

    it("throws an error for a undefined email address", () => {
        expect(() => validateEmail(undefined)).toThrow("Invalid email address.")
    });
});

describe("validateArrayNotEmpty()", () => {
    it("should validate a non empty array", () => {
        const array = [2, 5];

        const resultFn = () => validateArrayNotEmpty(array);

        expect(resultFn).not.toThrow();
    });

    it("throws an error for an empty array", () => {
        expect(() => validateArrayNotEmpty([])).toThrow("Array can't be empty.");
    });

    it("throws an error for a non-array input", () => {
        expect(() => validateArrayNotEmpty("not an array")).toThrow("Array can't be empty.");
    });

    it("throws an error for null input", () => {
        expect(() => validateArrayNotEmpty(null)).toThrow("Array can't be empty.");
    });

    it("throws an error for an undefined input", () => {
        expect(() => validateArrayNotEmpty(undefined)).toThrow("Array can't be empty.");
    });
})