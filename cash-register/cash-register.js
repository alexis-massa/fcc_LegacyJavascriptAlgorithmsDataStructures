// Currency unit values
const UNITS = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]

/**
 * Calculates change for a transaction based on purchase price, payment, and cash-in-drawer.
 * @param {number} price - The purchase price.
 * @param {number} cash - The payment amount.
 * @param {Array} cid - Cash-in-drawer as a 2D array [currency, amount].
 * @returns {Object} - An object with 'status' ("INSUFFICIENT_FUNDS", "CLOSED", or "OPEN") and 'change' array.
 */
function checkCashRegister(price, cash, cid) {
  // Total cash in drawer
  let changeDue = cash - price, change = [], total = cid.reduce((t, c) => t + c[1], 0)

  // Not enough funds
  if (total < changeDue) return { status: "INSUFFICIENT_FUNDS", change: [] }

  // Exact change, drawer closed
  if (total === changeDue) return { status: "CLOSED", change: cid }

  // Iterate from highest to lowest currency
  for (let i = UNITS.length - 1; i >= 0; i--) {
    let amount = 0
    // Deduct UNITS as long as possible
    while (changeDue >= UNITS[i] && cid[i][1] > 0) {
      changeDue = Math.round((changeDue - UNITS[i]) * 100) / 100 // Avoid floating-point issues
      cid[i][1] -= UNITS[i]
      amount += UNITS[i]
    }
    // Add used UNITS to change array
    if (amount) change.push([cid[i][0], amount])
  }
  return changeDue > 0 ? { status: "INSUFFICIENT_FUNDS", change: [] } : { status: "OPEN", change }
}


checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])