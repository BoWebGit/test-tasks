import React, {useState} from "react";

import './task-three.css';

function TaskThree() {
    const [inputValue, setInputValue] = useState('');
    const [operator, setOperator] = useState(false);
    const [previousOperator, setPreviousOperator] = useState(false);

    const handleNumberClick = (number) => {
        setInputValue(inputValue + number);
        setPreviousOperator(false);
    };
    
    const handleOperatorClick = (operatorValue) => {
        if (inputValue !== '') {
            if(operator){
                if(!previousOperator){
                    handleEqualsClick(operatorValue);
                    setPreviousOperator(true);
                }else{
                    setInputValue(inputValue.slice(0, -1) + operatorValue);
                }
                
            }else{
                setInputValue(inputValue + operatorValue);
                setOperator(true);
            }
        }
    };

    const handleEqualsClick = (operator) => {
        setInputValue(eval(inputValue) + operator);
        setPreviousOperator(false);
        if(operator.length <= 1){
            setOperator(true);
        }else{
            setOperator(false);
        }
    };
    
    const handleDeleteClick = () => {
        setInputValue(inputValue.slice(0, -1));
    };
    
    const handleClearClick = () => {
        setInputValue('');
        setOperator(false);
    };

    return (
        <div>
            <h2>Calculator</h2>
            <div className="calculator">
                <div className="input">{inputValue}</div>
                <div className="controls">
                    <button onClick={handleDeleteClick}>Delete</button>
                    <button onClick={handleClearClick}>Clear</button>
                </div>
                <div className="buttons">
                    <div className="row">
                        <button onClick={() => handleNumberClick('7')} className="btn_number">7</button>
                        <button onClick={() => handleNumberClick('8')} className="btn_number">8</button>
                        <button onClick={() => handleNumberClick('9')} className="btn_number">9</button>
                        <button onClick={() => handleOperatorClick('/')} className="btn_operator">/</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleNumberClick('4')} className="btn_number">4</button>
                        <button onClick={() => handleNumberClick('5')} className="btn_number">5</button>
                        <button onClick={() => handleNumberClick('6')} className="btn_number">6</button>
                        <button onClick={() => handleOperatorClick('*')} className="btn_operator">*</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleNumberClick('1')} className="btn_number">1</button>
                        <button onClick={() => handleNumberClick('2')} className="btn_number">2</button>
                        <button onClick={() => handleNumberClick('3')} className="btn_number">3</button>
                        <button onClick={() => handleOperatorClick('-')} className="btn_operator">-</button>
                    </div>
                    <div className="row">
                        <button onClick={() => handleNumberClick('0')} className="btn_number btn_zero">0</button>
                        <button onClick={() => handleEqualsClick('')} className="btn_number">=</button>
                        <button onClick={() => handleOperatorClick('+')} className="btn_operator">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskThree;

