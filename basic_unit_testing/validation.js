export function validateStringNotEmpty(value) {
    if (value.trim().length === 0) {
        throw new Error('Invalid input - must not be empty.');
    }
}

export function validateNumber(number) {
    if (isNaN(number)) {
        throw new Error('Invalid number input.');
    }
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error("Invalid email address.");
    }
}

export function validateArrayNotEmpty(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Array can't be empty.");
    }
}