/*
Write a JavaScript function called calculateTax that takes an income as an argument and returns the
amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the
function with various incomes.
*/

function calculateTax(){
    return function(income) {
      let tax;
      if (income <= 50000) {
        tax = income * 0.1;
      } else if (income <= 100000) {
        tax = income * 0.2;
      } else {
        tax = income * 0.3;
      }
      return tax;
    };
  }
  
  const taxCalculator = calculateTax();
  let income1 = 45000;
  let income2 = 75000;
  let income3 = 150000;
  
  console.log(`Tax for income of ${income1}: $${taxCalculator(income1)}`);
  console.log(`Tax for income of ${income2}: $${taxCalculator(income2)}`);
  console.log(`Tax for income of ${income3}: $${taxCalculator(income3)}`);
  