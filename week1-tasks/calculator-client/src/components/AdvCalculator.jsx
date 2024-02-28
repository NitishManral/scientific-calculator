import React, { useState, useEffect } from 'react';
import '../style/SimpleCalculator.css';
import evaluate from '../utility/evaluate';

const AdvCalculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [isRadians, setIsRadians] = useState(true);
    const [isInverse, setIsInverse] = useState(false);
  
    const notAFunction = (e) => {
      // do nothing
    };
  
    const handleInputChange = (e) => {
        if(e.target.value !== " "){
            setExpression(e.target.value);
        }
      
    };
  
    const handleClick = (e) => {
      setExpression(expression + e.target.value);
    };
  
    const handleClickRad = (e) => {
      setIsRadians(!isRadians);
    };
  
    const handleClickInv = (e) => {
      setIsInverse(!isInverse);
    
    };
  
    useEffect(() => {
      if (result !== undefined) {
        console.log("expression "+expression+" result "+result);
        setResult(evaluate(expression, isRadians, isInverse));
      }
    }, [expression, isRadians, isInverse]);
  
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
        
        <button onClick={handleClickRad}>
          {isRadians ? 'RAD' : 'DEG'}
        </button> 
        <button onClick={handleClickInv}>
          {isInverse ? 'INV' : 'REG'}
        </button> 
        <button value='!' onClick={handleClick}>
          X!
        </button> 
        <button value='sin(' onClick={handleClick}>
          sin
        </button> 
        <button value='cos(' onClick={handleClick}>
          cos
        </button> 
        <button value='tan(' onClick={handleClick}>
          tan
        </button> 
        <button value='In(' onClick={handleClick}>
          In
        </button> 
        <button value='logBaseB(a,b)' onClick={handleClick}>
          log
        </button> 
        <button value='pi' onClick={handleClick}>
            π
        </button> 
        <button value='e' onClick={handleClick}>
          e
        </button> 
        <button value='(' onClick={handleClick}>
          (
        </button>
        <button value=')' onClick={handleClick}>
          )
        </button>
        <button value='.' onClick={handleClick}>
          .
        </button>
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
        <button value='/' onClick={handleClick}>
          /
        </button>
        <button value='0' onClick={handleClick}>
          0
        </button>
        <button  className='eqaul'>
          =
        </button>
      </div>
    </div>
  );
};

export default AdvCalculator;
