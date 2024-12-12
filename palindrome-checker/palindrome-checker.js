/**
 * Checks if a given string `str` is a palindrome
 * @param {string} str The string to check
 * @returns {boolean} True if is palindrome, false otherwise
 */
function palindrome(str) {
  const word = str.replace(/[^a-z\d]/gi, "").toLowerCase()
  const len = word.length - 1

  for (var i = 0; i < len / 2; i++) if (word[i] !== word[len - i]) return false
  return true
}


palindrome("eye")