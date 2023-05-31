import React, { useState } from 'react';
import Button from './myButton';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [calculatorData, setCalculatorData] = useState({});
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    if (buttonName === '=') {
      if (newData.total) {
        setDisplay(newData.total);
      } else {
        setDisplay('0');
      }
      setCalculatorData({});
    } else if (['+', '-', 'x', '÷'].includes(buttonName)) {
      setDisplay(buttonName);
      setCalculatorData({
        total: display,
        next: null,
        operation: buttonName,
      });
    } else {
      if (newData.next) {
        setDisplay(newData.next);
      } else {
        setDisplay('0');
      }
      setCalculatorData(newData);
    }
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="screen">{display}</div>
        <Button className="btn light-gray" onClick={() => handleButtonClick('AC')}>AC</Button>
        <Button className="btn light-gray" onClick={() => handleButtonClick('+/-')}>+/-</Button>
        <Button className="btn light-gray" onClick={() => handleButtonClick('%')}>%</Button>
        <Button className="btn orange" onClick={() => handleButtonClick('/')}>/</Button>
        <Button className="btn" onClick={() => handleButtonClick('7')}>7</Button>
        <Button className="btn" onClick={() => handleButtonClick('8')}>8</Button>
        <Button className="btn" onClick={() => handleButtonClick('9')}>9</Button>
        <Button className="btn orange" onClick={() => handleButtonClick('x')}>x</Button>
        <Button className="btn" onClick={() => handleButtonClick('4')}>4</Button>
        <Button className="btn" onClick={() => handleButtonClick('5')}>5</Button>
        <Button className="btn" onClick={() => handleButtonClick('6')}>6</Button>
        <Button className="btn orange" onClick={() => handleButtonClick('-')}>-</Button>
        <Button className="btn" onClick={() => handleButtonClick('1')}>1</Button>
        <Button className="btn" onClick={() => handleButtonClick('2')}>2</Button>
        <Button className="btn" onClick={() => handleButtonClick('3')}>3</Button>
        <Button className="btn orange" onClick={() => handleButtonClick('+')}>+</Button>
        <Button className="btn zero" onClick={() => handleButtonClick('0')}>0</Button>
        <Button className="btn" onClick={() => handleButtonClick('.')}>.</Button>
        <Button className="btn orange" onClick={() => handleButtonClick('=')}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;
