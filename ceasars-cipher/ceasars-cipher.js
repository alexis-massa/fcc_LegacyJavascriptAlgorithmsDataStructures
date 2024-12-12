/**
 * Decypher a ROT13 ciphered string (Ceasar's cipher of 13)
 * @param {string} str The string to decipher 
 * @returns {string} The deciphered string
 */
function rot13(str) {
  // String to uppercase (just in case)
  // Replace letters by the letter found by shifting them left by 13
  return str.toUpperCase().replace(/[A-Z]/g, (char) => String.fromCharCode(((char.charCodeAt(0) - 65 - 13 + 26) % 26) + 65))
}

rot13("SERR PBQR PNZC")