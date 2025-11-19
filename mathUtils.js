function add(a, b) {
  return a + b;
}
module.exports = { add };
// refactor this function for better error handling
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
module.exports = { add, divide };