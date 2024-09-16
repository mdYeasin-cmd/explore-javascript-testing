import { it, describe, expect, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
    it("should execute the logger function if passed", () => {
        const loggerFn = vi.fn();

        // loggerFn.mockImplementation(() => { });
        loggerFn.mockImplementationOnce(() => { });

        generateToken(loggerFn);

        // expect(loggerFn).toHaveBeenCalled();
        // expect(loggerFn).toBeCalledTimes(2);
        expect(loggerFn).toBeCalled();
    });
});