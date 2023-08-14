import React, {useState} from "react";

function TaskFour() {

    const [expression, setExpression] = useState('');
    const [isValid, setIsValid] = useState('');
    const [checked, setChecked] = useState(false);

    const checkBrackets = () => {
        const stack = [];
        const openingBrackets = ['(', '[', '{'];
        const closingBrackets = [')', ']', '}'];
    
        for (const char of expression) {
          if (openingBrackets.includes(char)) {
            stack.push(char);
          } else if (closingBrackets.includes(char)) {
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (stack.length === 0 || stack[stack.length - 1] !== correspondingOpeningBracket) {
              setIsValid(false);
              return;
            }
            stack.pop();
          }
        }
        setIsValid(stack.length === 0);

        setChecked(true);
    };

    return (
        <div>
            <h2>Parentheses Parity Check</h2>
            <input
                type="text"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
            />
            <button onClick={checkBrackets}>Check</button>
            {checked && (
                <p>{isValid ? 'All brackets are closed.' : 'Not all brackets are closed.'}</p>
            )}
        </div>
    );
}

export default TaskFour;