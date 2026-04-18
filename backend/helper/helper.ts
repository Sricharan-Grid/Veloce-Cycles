export const errorHandler = (err: any) => {
  console.error(err);
};

const CryptoJS = require("crypto-js");
const SECRET_KEY = "v3l0c3_Ph03n1x_7892_R1d3_5tr0ng_B3y0nd";

const decryptPayload = (data: any) => {
  // 1. Check if data exists and is a string
  if (!data || typeof data !== "string") {
    console.error("Decryption Error: Data is null or not a string.");
    return null;
  }

  try {
    // 2. Attempt decryption
    const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    // 3. Check if decryption actually produced text
    if (!decryptedText) {
      console.error(
        "Decryption Error: Could not derive UTF-8 text (Wrong key or invalid format).",
      );
      return null;
    }

    return JSON.parse(decryptedText);
  } catch (error) {
    // This catches the 'salt' undefined error and prevents the crash
    console.error("CryptoJS Error: Input is not a valid encrypted string.");
    return null;
  }
};

module.exports = { decryptPayload };
