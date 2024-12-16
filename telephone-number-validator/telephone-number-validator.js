/**
 * Checks if a given string is a valid US phone number
 * @param {string} str 
 * @returns true if Phone number is valid, false otherwise
 */
function telephoneCheck(str) {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str)
}

telephoneCheck("555-555-5555");