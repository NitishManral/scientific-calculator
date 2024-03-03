import React, { useState, useEffect } from 'react';
import '../style/SimpleCalculator.css';
import evaluate from '../utility/evaluate';

const AdvCalculator = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [isRadians, setIsRadians] = useState(false);
    const [isInverse, setIsInverse] = useState(false);
    let superscriptA = "\u1d43";
    let superscriptB = "\u1d47";
    let superscriptMinusOne = "\u207B\u00B9";
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
    const clear = (e) => {
      setExpression(expression.slice(0, -1));
    }
    const clearAll = (e) => {
      setExpression('');
      setResult('');
    
    }
    useEffect(() => {
      if(isInverse){
        document.getElementById("sin").innerHTML = "sin"+superscriptMinusOne;
        document.getElementById("sin").value = "sin⁻¹(";
        document.getElementById("cos").innerHTML = "cos"+superscriptMinusOne;
        document.getElementById("cos").value = "cos⁻¹(";
        document.getElementById("tan").innerHTML = "tan"+superscriptMinusOne;
        document.getElementById("tan").value = "tan⁻¹(";
      }
      if(!isInverse){
        document.getElementById("sin").innerHTML = "sin";
        document.getElementById("sin").value = "sin(";
        document.getElementById("cos").innerHTML = "cos";
        document.getElementById("cos").value = "cos(";
        document.getElementById("tan").innerHTML = "tan";
        document.getElementById("tan").value = "tan(";
      }
      
    }, [isInverse]);
    useEffect(() => {
      if (result !== undefined) {
        setResult(evaluate(expression, isRadians, isInverse));
        console.log("expression- "+expression+" result- "+result);
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
        <div className='special-function'>
          <button onClick={handleClickRad}>
            {isRadians ? 'RAD' : 'DEG'}
          </button> 
          <button onClick={handleClickInv}>
            {isInverse ? 'INV' : 'REG'}
          </button> 
          <button value='!' onClick={handleClick}>
            X!
          </button> 
          <button value='sin(' id="sin"onClick={handleClick}>
            sin
          </button> 
          <button value='cos(' id="cos" onClick={handleClick}>
            cos
          </button> 
          <button value='tan(' id="tan" onClick={handleClick}>
            tan
          </button> 
          <button value='ln(' onClick={handleClick}>
          ln
          </button> 
          <button value='log(' onClick={handleClick}>
            log
          </button> 
          <button value='pi' onClick={handleClick}>
              π
          </button> 
          <button value='e' onClick={handleClick}>
            e
          </button> 
          <button value='^' onClick={handleClick}>
           { "a"+superscriptB} 
          </button> 
          <button value='sqrt(a,b' onClick={handleClick}>
          {"sqrt(a,b)" }    
          </button>
        </div>
        <div className='numbers'>
          <button value='1' onClick={handleClick}>
            1
          </button>
          <button value='2' onClick={handleClick}>
            2
          </button>
          <button value='3' onClick={handleClick}>
            3
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
          <button value='7' onClick={handleClick}>
            7
          </button>
          <button value='8' onClick={handleClick}>
            8
          </button>
          <button value='9' onClick={handleClick}>
            9
          </button>
       
        </div>
        <div className='common-function'>

        <button value='0' onClick={handleClick}>
            0
          </button>
          <button value='+' onClick={handleClick}>
            +
          </button>
          <button value='-' onClick={handleClick}>
            -
          </button>

          
          <button value='.' onClick={handleClick}>
            .
          </button>
            
          <button value='*' onClick={handleClick}>
            *
          </button>
          <button value='/' onClick={handleClick}>
            /
          </button>
          
          <button value='(' onClick={handleClick}>
            (
          </button>
          <button value=')' onClick={handleClick}>
            )
          </button>
          <button  className='eqaul' >
            =
          </button>
          <button  className='clear' onClick={clear}>
            C
          </button>
          <button  className='clearAll' onClick={clearAll}>
            CA
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default AdvCalculator;
