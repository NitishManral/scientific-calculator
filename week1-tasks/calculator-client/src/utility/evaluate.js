
function evaluate(expression, isRadians = true, isInverse = false) {
  expression = expression.replace(/\s+/g, '');
  expression = expression.replace(/pi/g, Math.PI.toString());
  expression = expression.replace(/e/g, Math.E.toString());
 
  
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b),
    'fact': (a) => factorial(a),

    'sin⁻¹': (a) => {
        if (isRadians) {
          return Math.asin(a);
        } else {
          return Math.asin(a) * 180 / Math.PI;
        }
    },
    'cos⁻¹': (a) => {
        if (isRadians) {
          return Math.acos(a);
        } else {
          return Math.acos(a) * 180 / Math.PI;
        }
    },
    'tan⁻¹': (a) => {
        if (isRadians) {
          return Math.atan(a);
        } else {
          return Math.atan(a) * 180 / Math.PI;
        }
    },
    'sin': (a) => {
        if (isRadians) {
          return Math.sin(a);
        } else {
          return Math.sin(a * Math.PI / 180);
        }
    },
    'cos': (a) => {
        if (isRadians) {
          return Math.cos(a);
        } else {
          return Math.cos(a * Math.PI / 180);
        }
    },
    'tan': (a) => {
        if (isRadians) {
          return Math.tan(a);
        } else {
          return Math.tan(a * Math.PI / 180);
        }
    },
    'log': (a,b) => logBaseB(a,b),
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
    'fact': 4,
    'sin': 5,
    'cos': 5,
    'tan': 5,
    'sin⁻¹': 5,
    'cos⁻¹': 5,
    'tan⁻¹': 5,
    'log': 5,
    'ln': 5,
    'sqrt': 5,
    'pi': 6,
    'e': 6
  };
  function isNumber(char) {
    return (!isNaN(parseFloat(char)) && isFinite(char)) || char === '.';
  }
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

  let evalExp = "";
  for(let i=0; i<expression.length; i++){
      let token ="";
      if(isNumber(expression[i]) ){
          while(i<expression.length&& isNumber(expression[i] )){
              token += expression[i];
              i++;
              if(expression[i] === "!"){
                token = "fact ( "+token+" ) ";
                i++;
            }
            
              console.log(token);
          }
          evalExp += token + " ";
        
      } else {

          while(i<expression.length && !isNumber(expression[i]) ){
              token += expression[i];
              i++;
              if(token in operators){
                if(token === "sin" || token === "cos" || token === "tan" ){
                  
                  if( expression[i] === "⁻" && i< expression.length && expression[i+1] === "¹"){
                    token += "⁻¹";
                    i+=2;
                  }
                }
                  break;
              }

          }
          evalExp += token + " ";
      }
      i--;
      // console.log(token);
  }
  expression = evalExp;
  
  let stack = [];
  let outputQueue = [];
  expression = expression.split(/([\+\-\*\/\s])/).filter(Boolean);
  expression = expression.filter(element => element !== " ");

  
  console.log(expression);
  expression.forEach(token => {
    if (isNumber(token)) {
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
      return 'Nan';
    }
  });
  console.log(outputQueue);

  while (stack.length) {
    outputQueue.push(stack.pop());
  }

  let calculationStack = [];
  outputQueue.forEach(token => {
    if (!isNaN(token)) { // Change this line
      calculationStack.push(token);
    } else {
      if (!operators[token]) {
        console.warn(`Unexpected token: ${token}`);
        return null;
      }
      let a = parseFloat(calculationStack.pop());
      let b = null;
      if (token !== 'sin' &&  token !== 'cos' && token !== 'tan' && token !== 'sin⁻¹' && token !== 'cos⁻¹' && token !== 'tan⁻¹' && token !== 'ln' && token !== 'sqrt' && token !== 'fact') {
        b = parseFloat(calculationStack.pop());
        if (isNaN(b)) {
          console.warn(`Invalid operands for operator ${token}: ${b}, ${a}`);
          return null;
        }
        calculationStack.push(operators[token](b,a))
      }else{
        calculationStack.push(operators[token](a));
      }
      console.log("b "+b);
      console.log("a "+a);
      ;
    }
  });
  if (calculationStack.length !== 1) {
    return '';
  }
  
  return calculationStack.pop();
}
export default evaluate;