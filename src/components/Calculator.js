import React from 'react';
import '../styles/Calculator.css';
import Accordian from './Accordian';
import Operations from './Operations';

const Calculator = () => {
  return (
    <div className='calculate-page' style={{ color: 'black' }}>
      <div className="parts">
        <Accordian />
      </div>

      <div className="parts">
        <Operations />
      </div>
    </div>
  )
}

export default Calculator;