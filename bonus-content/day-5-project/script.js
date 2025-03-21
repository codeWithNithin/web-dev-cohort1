const firstNumInput = document.getElementById("num1");
const secondNumInput = document.getElementById("num2");
const resultSpan = document.getElementById("result");


function calculate(operator) {
  const num1 = Number(firstNumInput.value);
  const num2 = Number(secondNumInput.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultSpan.textContent = "Please enter valid numbers";
    return;
  }

  switch (operator) {
    case '+':
      resultSpan.textContent = num1 + num2;
      break;
    case '-':
      resultSpan.textContent = num1 - num2;
      break;
    case '*':
      resultSpan.textContent = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultSpan.textContent = "Cannot divide by zero";
      } else {
        resultSpan.textContent = num1 / num2;
      }
      break;
    default:
      resultSpan.textContent = "Invalid operator";
  }
}