
/**
 * Evaluates a mathematical expression.
 * @param {string} expression - The mathematical expression to evaluate.
 * @param {boolean} [isRadians=true] - Specifies whether trigonometric functions should use radians (default) or degrees.
 * @param {boolean} [isInverse=false] - Specifies whether trigonometric functions should be inverse (default) or regular.
 * @returns {number|string} - The result of the evaluation as a number, or an empty string if the evaluation fails.
 */
function evaluate(expression, isRadians = true, isInverse = false) {
  expression = expression.replace(/\s+/g, '');
  console.log("expression "+expression);
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b),
    '!': (a) => factorial(a),
    'sin': (a) => {
      if (isInverse) {
        if (isRadians) {
          return Math.asin(a);
        } else {
          return Math.asin(a) * 180 / Math.PI;
        }
      } else {
        if (isRadians) {
          return Math.sin(a);
        } else {
          return Math.sin(a * Math.PI / 180);
        }
      }
    },
    'cos': (a) => {
      if (isInverse) {
        if (isRadians) {
          return Math.acos(a);
        } else {
          return Math.acos(a) * 180 / Math.PI;
        }
      } else {
        if (isRadians) {
          return Math.cos(a);
        } else {
          return Math.cos(a * Math.PI / 180);
        }
      }
    },
    'tan': (a) => {
      if (isInverse) {
        if (isRadians) {
          return Math.atan(a);
        } else {
          return Math.atan(a) * 180 / Math.PI;
        }
      } else {
        if (isRadians) {
          return Math.tan(a);
        } else {
          return Math.tan(a * Math.PI / 180);
        }
      }
    },
    'logBaseB': (a,b) => logBaseB(a,b),
    'ln': (a) => Math.log(a),
    'sqrt': (a) => Math.sqrt(a),
    'pi': () => Math.PI,
    'e': () => Math.E
  };

  const operatorPrecedence = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
    '!': 4,
    'sin': 5,
    'cos': 5,
    'tan': 5,
    'logBaseB': 5,
    'ln': 5,
    'sqrt': 5,
    'pi': 6,
    'e': 6
  };

  function logBaseB(a, b) {
    return Math.log(a) / Math.log(b);
  }
  function factorial(n) {
    if (n === 0 || n === 1)
      return 1;
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }

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
      if (!operators[token]) {
        console.warn(`Unexpected token: ${token}`);
        return null;
      }
      let a = parseFloat(calculationStack.pop());
      let b = parseFloat(calculationStack.pop());
      if (isNaN(a) || isNaN(b)) {
        console.warn(`Invalid operands for operator ${token}: ${b}, ${a}`);
        return null;
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