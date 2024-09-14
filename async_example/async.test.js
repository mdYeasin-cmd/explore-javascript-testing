import { it, expect, beforeAll, afterAll, beforeEach, afterEach } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJS from "crypto-js";

beforeAll(() => {
    console.log("Before all");
});

afterAll(() => {
    console.log("After all");
});

beforeEach(() => {
    console.log("Before each");
})

afterEach(() => {
    console.log("After each");
});

it("should encrypt a message", async () => {
    const message = "Programming Hero";
    const secretKey = "lsdfasdf333sdlkf89";

    const encryptedMessage = await new Promise((resolve, reject) => {
        encryptMessage(message, secretKey, (message) => {
            resolve(message);
        });
    });

    expect(encryptedMessage).toBeDefined();
});

it("should also just pass", async () => {
    const message = "Programming Hero";
    const secretKey = "lsdfasdf333sdlkf89";

    const encryptedData = await encryptMessagePromise(message, secretKey);

    expect(encryptedData).toBeDefined();
});

it("should encrypt a message", async () => {
    const message = "Programming Hero";
    const secretKey = "lsdfasdf333sdlkf89";

    const encryptedData = await encryptMessagePromise(message, secretKey);

    expect(encryptedData).toBeDefined();

    const decryptedMessage = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(CryptoJS.enc.Utf8);

    expect(decryptedMessage).toBe(message);
});