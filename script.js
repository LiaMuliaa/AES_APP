document.getElementById("encryptBtn").addEventListener("click", function () {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!message || !key) {
        alert("Please enter both message and key!");
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById("output").value = encrypted;
});

document.getElementById("decryptBtn").addEventListener("click", function () {
    const encryptedMessage = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!encryptedMessage || !key) {
        alert("Please enter both encrypted message and key!");
        return;
    }

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, key);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);

        if (!decrypted) {
            throw new Error("Decryption failed");
        }

        document.getElementById("output").value = decrypted;
    } catch (e) {
        alert("Invalid encrypted message or key!");
    }
});
