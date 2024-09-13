import { it, expect } from "vitest";
import { stringLenth } from "./stringLength";

it("returns correct length for non-empty string", () => {
    expect(stringLenth("hello")).toBe(5);
    expect(stringLenth("world")).toBe(5);
    expect(stringLenth("hello world")).toBe(11);
});

it("returns 0 for empty string", () => {
    expect(stringLenth("")).toBe(0);
});

it("throws error for not-string input", () => {
    expect(() => stringLenth(null)).toThrow();
    expect(() => stringLenth(undefined)).toThrow();
    expect(stringLenth(123)).toBeUndefined();
})
