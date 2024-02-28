import React, { useState } from "react";

const Calculator = () => {
    const [current, setCurrent] = useState("");

    const press = (event) => {
        let key = event.target.textContent;
    
        switch (key) {
            case '=':
                if (current.includes('^')) {
                    let base = current.slice(0, current.indexOf('^'));
                    let exponent = current.slice(current.indexOf('^') + 1);
                    setCurrent(eval('Math.pow(' + base + ',' + exponent + ')').toString());
                } else {
                    setCurrent(eval(current).toString());
                }
                break;
            case 'C':
                setCurrent('');
                break;
            case '*':
            case '/':
            case '+':
            case '-':
                setCurrent(current + key);
                break;
            case '±':
                setCurrent(current.startsWith('-') ? current.slice(1) : '-' + current);
                break;
            case '<=':
                setCurrent(current.substring(0, current.length - 1));
                break;
            case '%':
                setCurrent((current / 100).toString());
                break;
            case 'π':
                setCurrent((current * Math.PI).toString());
                break;
            case 'x ²':
                setCurrent((eval(current * current)).toString());
                break;
            case '√':
                setCurrent(Math.sqrt(Number(current)).toString());
                break;
            case 'sin':
                setCurrent(Math.sin(Number(current)).toString());
                break;
            case 'cos':
                setCurrent(Math.cos(Number(current)).toString());
                break;
            case 'tan':
                setCurrent(Math.tan(Number(current)).toString());
                break;
            case 'log':
                setCurrent(Math.log10(Number(current)).toString());
                break;
            case 'ln':
                setCurrent(Math.log(Number(current)).toString());
                break;
            case 'x^':
                setCurrent(current + '^');
                break;
            case 'x !':
                let number = 1;
                if (current === 0) {
                    setCurrent('1');
                } else if (current < 0) {
                    setCurrent(NaN.toString());
                } else {
                    let number = 1;
                    for (let i = current; i > 0; i--) {
                        number *= i;
                    }
                    setCurrent(number.toString());
                }
                break;
            case 'e':
                setCurrent(Math.exp(Number(current)).toString());
                break;
            case 'rad':
                setCurrent((current * (Math.PI / 180)).toString());
                break;
            case '∘':
                setCurrent((current * (180 / Math.PI)).toString());
                break;
            default:
                setCurrent(current + key);
        }
    };


    return (
        <div className="calculator">
            <div className="results">
                <input className="input" value={current} readOnly />
            </div>
            <div className="mode">
                <button className="button" onClick={press}>sin</button>
                <button className="button" onClick={press}>cos</button>
                <button className="button" onClick={press}>tan</button>
                <button className="button" onClick={press}>x^</button>
                <button className="button" onClick={press}>&#60;=</button>
                <button className="button" onClick={press}>C</button>
                <button className="button" onClick={press}>log</button>
                <button className="button" onClick={press}>ln</button>
                <button className="button" onClick={press}>e</button>
                <button className="button" onClick={press}>∘</button>
                <button className="button" onClick={press}>rad</button>
                <button className="button" onClick={press}>√</button>
                <button className="button" onClick={press}>7</button>
                <button className="button" onClick={press}>8</button>
                <button className="button" onClick={press}>9</button>
                <button className="button" onClick={press}>/</button>
                <button className="button" onClick={press}>x ²</button>
                <button className="button" onClick={press}>x !</button>
                <button className="button" onClick={press}>4</button>
                <button className="button" onClick={press}>5</button>
                <button className="button" onClick={press}>6</button>
                <button className="button" onClick={press}>*</button>
                <button className="button" onClick={press}>(</button>
                <button className="button" onClick={press}>)</button>
                <button className="button" onClick={press}>1</button>
                <button className="button" onClick={press}>2</button>
                <button className="button" onClick={press}>3</button>
                <button className="button" onClick={press}>-</button>
                <button className="button" onClick={press}>%</button>
                <button className="button" onClick={press}>±</button>
                <button className="button" onClick={press}>0</button>
                <button className="button" onClick={press}>.</button>
                <button className="button" onClick={press}>&#x003C0;</button>
                <button className="button" onClick={press}>+</button>
                <button className="button equal-sign" onClick={press}>=</button>
            </div>
        </div>
    );
};

export default Calculator;