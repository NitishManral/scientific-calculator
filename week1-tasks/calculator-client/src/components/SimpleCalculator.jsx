import React, { useState, useEffect } from 'react';
import '../style/SimpleCalculator.css';

const SimpleCalculator = (props) => {
    
  const notAFunction = (e) => {
    // do nothing
  };

  const handleInputChange = (e) => {
      if(e.target.value !== " "){
          props.setExpression(e.target.value);
      }
    
  };

  const handleClick = (e) => {
    props.setExpression(props.expression + e.target.value);
  };

  const handleClickRad = (e) => {
    props.setIsRadians(!props.isRadians);
  };

  const handleClickInv = (e) => {
    props.setIsInverse(!props.isInverse);
  
  };
  const clear = (e) => {
    props.setExpression(props.expression.slice(0, -1));
  }
  const clearAll = (e) => {
    props.setExpression('');
    props.setResult('');
  
  }
  

return (
  <>
    <textarea
      className='expressionTextArea'
      type='text'
      value={props.expression}
      onChange={handleInputChange}
    />
    <textarea
      className='expressionEvaluateArea'
      type='text'
      value={props.result}
      onChange={notAFunction}
      readOnly
    />
    <div className='keyContainer'>
      
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
        
        <button value='.' onClick={handleClick}>
          .
        </button>
          
        <button value='0' onClick={handleClick}>
          0
        </button>
        <button  className='eqaul' onClick={props.createHistory}>
          =
        </button>
     
      </div>
      <div className='common-function'>

      
        <button value='+' onClick={handleClick}>
          +
        </button>
        <button value='-' onClick={handleClick}>
          -
        </button>
        <button value='*' onClick={handleClick}>
          *
        </button>
        <button value='/' onClick={handleClick}>
          /
        </button>
        
        <button value='^2' onClick={handleClick}>
          a&sup2;
        </button>
      
        <button value='sqrt(' onClick={handleClick}>
          &radic;a
        </button> 
        <button value='(' onClick={handleClick}>
          (
        </button>
        <button value=')' onClick={handleClick}>
          )
        </button>
        <button value=',' onClick={handleClick}>
          ,
        </button>
        
        <button  className='clear' onClick={clear}>
          C
        </button>
        <button  className='clearAll' onClick={clearAll}>
          CA
        </button>
      </div>
    </div>
  </>
);
};

export default SimpleCalculator;
