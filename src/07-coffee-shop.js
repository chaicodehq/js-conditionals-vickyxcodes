/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total number of a coffee order.
 * Here's their menu:
 *
 * Base number by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", -1
 *   - the total number rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total number or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  // Base number by size:
  let number;

  if(size=="small"){
    number=3;
  }
  else if(size=="medium"){
    number=4;
  }
  else if(size=="large"){
    number=5;
  }
  else{
    return -1;
  }

  // add on
  if (type=="regular"){
    number+=0;
  }
  else if(type=="latte"){
    number+=1
  }
  else if(type=="cappuccino"){
    number+=1.5
  }
  else if(type=="mocha"){
    number+=2
  }
  else{
    return -1;
  }

  // Optional extras:
  // Optional extras:
if (extras.whippedCream) {
  number += 0.50;
}

if (extras.extraShot) {
  number += 0.75;
}

  return Number(number.toFixed(2));
}
