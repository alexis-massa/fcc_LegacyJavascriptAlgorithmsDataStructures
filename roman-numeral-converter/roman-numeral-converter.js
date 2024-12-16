// Roman string to arabic number mapping
const ROMAN_MAP = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
]

/**
 * Converts a number to Roman numerals.
 * @param {number} num - The number to convert.
 * @returns {string} - The Roman numeral representation.
 */
function convertToRoman(num) {
  let result = ""
  for (let [value, numeral] of ROMAN_MAP) {
    while (num >= value) {
      result += numeral
      num -= value
    }
  }
  return result
}

convertToRoman(3999)