/* Create a command-line Node.js program that simulates a basic calculator. 
The program should allow users to perform addition, subtraction, multiplication, 
and division operations on two numbers.  */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function calculate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error: Division by zero is not allowed.';
      }
      return num1 / num2;
    default:
      return 'Invalid operator! Please use +, -, *, or /.';
  }
}


rl.question('Enter the first number: ', (firstNumber) => {
  const num1 = parseFloat(firstNumber);

  rl.question('Enter the second number: ', (secondNumber) => {
    const num2 = parseFloat(secondNumber);

    
    rl.question('Enter the operator (+, -, *, /): ', (operator) => {
      const result = calculate(operator, num1, num2);

      console.log(`Result: ${result}`);

      rl.close();
    });
  });
});

