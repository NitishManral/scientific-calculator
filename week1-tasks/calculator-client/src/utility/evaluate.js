function evaluate(expression) {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  const operatorPrecedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  let stack = [];
  let outputQueue = [];

  expression.split(/\b/).forEach(token => {
    if (parseFloat(token)) {
      outputQueue.push(token);
    } else if (token in operators) {
      while (stack.length && operatorPrecedence[stack[stack.length - 1]] >= operatorPrecedence[token]) {
        outputQueue.push(stack.pop());
      }
      stack.push(token);
    } else if (token === '(') {
      stack.push(token);
    } else if (token === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') {
        outputQueue.push(stack.pop());
      }
      stack.pop();
    } else {
      return '';
    }
  });

  while (stack.length) {
    outputQueue.push(stack.pop());
  }

  let calculationStack = [];

  outputQueue.forEach(token => {
    if (parseFloat(token)) {
      calculationStack.push(token);
    } else {
      let a = parseFloat(calculationStack.pop());
      let b = parseFloat(calculationStack.pop());
      if (isNaN(a) || isNaN(b)) {
        return '';
      }
      calculationStack.push(operators[token](b, a));
    }
  });

  if (calculationStack.length !== 1) {
    return '';
  }

  return calculationStack.pop();
}
export default evaluate;