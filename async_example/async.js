import CryptoJS from "crypto-js";

export function encryptMessage(message, key, callback) {
    const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();
    callback(encryptMessage);
};

export function encryptMessagePromise(message, key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptMessage = CryptoJS.AES.encrypt(message, key).toString();

            if (encryptMessage) {
                resolve(encryptMessage);
            } else {
                reject(new Error("Failed to encrypt message"));
            }
        }, 2000);
    });
}

// const message = {
//     name: "Mizan",
//     password: "1122334455667788",
// }

// const secretKey = "ldkfaklsdf34#ldkflaskdf3dfk";

// encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
//     console.log(encryptedMessage);
// });

// encryptMessagePromise(JSON.stringify(message), secretKey)
//     .then((encryptedMessage) => {
//         console.log(encryptedMessage);
//     })