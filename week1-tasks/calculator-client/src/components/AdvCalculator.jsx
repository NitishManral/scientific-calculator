import React, { useState, useEffect } from 'react';
import '../style/SimpleCalculator.css';

const AdvCalculator = (props) => {
    
  const [isInverse, setIsInverse] = useState(false);
    let superscriptA = "\u1d43";
    let superscriptB = "\u1d47";
    let superscriptMinusOne = "\u207B\u00B9";
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
    const clear = (e) => {
      props.setExpression(props.expression.slice(0, -1));
    }
    const clearAll = (e) => {
      props.setExpression('');
      props.setResult('');
    
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
          <button  className='eqaul' onClick={props.createHistory} >
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
              
        <div className='special-function'>
          <button onClick={()=>{
            console.log("isRadians- "+props.isRadians);
            props.setIsRadians(!props.isRadians)}}>
            {props.isRadians ? 'RAD' : 'DEG'}
          </button> 
          <button onClick={()=>{setIsInverse(!isInverse)}}>
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
          <button value='root(' onClick={handleClick}>
          <sup>b</sup>&radic;a    
          </button>
        </div>
      </div>
    </>
  );
};

export default AdvCalculator;
