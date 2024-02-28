import React, { useState, useEffect } from 'react';
import '../style/SimpleCalculator.css';
import evaluate from '../utility/evaluate';

const SimpleCalculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  

  const notAFunction = (e) => {
    // do nothing
  };

  const handleInputChange = (e) => {
    setExpression(e.target.value);
  };

  const handleClick = (e) => {
    setExpression(expression + e.target.value);
  };

  useEffect(() => {
    if (!(result === undefined)) {
       setResult(evaluate(expression));
    }
  }, [ expression]);

  return (
    <div className='simple-calculator'>
      <textarea
        className='expressionTextArea'
        type='text'
        value={expression}
        onChange={handleInputChange}
      />
      <textarea
        className='expressionEvaluateArea'
        type='text'
        value={result}
        onChange={notAFunction}
        readOnly
      />
      <div className='keyContainer'>
        
        <button value='1' onClick={handleClick}>
          1
        </button>
        <button value='2' onClick={handleClick}>
          2
        </button>
        <button value='3' onClick={handleClick}>
          3
        </button>
        <button value='+' onClick={handleClick}>
          +
        </button>
        <button value='4' onClick={handleClick}>
          4
        </button>
        <button value='5' onClick={handleClick}>
          5
        </button>
        <button value='6' onClick={handleClick}>
          6
        </button>
        <button value='-' onClick={handleClick}>
          -
        </button>
        <button value='7' onClick={handleClick}>
          7
        </button>
        <button value='8' onClick={handleClick}>
          8
        </button>
        <button value='9' onClick={handleClick}>
          9
        </button>
        <button value='*' onClick={handleClick}>
          *
        </button>
        <button value='0' onClick={handleClick}>
          0
        </button>
        <button value='(' onClick={handleClick}>
          (
        </button>
        <button value=')' onClick={handleClick}>
          )
        </button>
        <button value='/' onClick={handleClick}>
          /
        </button>
      </div>
    </div>
  );
};

export default SimpleCalculator;
