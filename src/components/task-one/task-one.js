import React, {useState} from "react";

function TaskOne() {
    const [inputText, setInputText] = useState(' ');
    const [isPalindrome, setIsPalindrome] = useState(false);
    const [checked, setChecked] = useState(false);

    const checkPalindrome = () => {
        const cleanedText = inputText.toLowerCase().replace(/\s+/g, '');

        if(cleanedText.length <= 1) {
            setIsPalindrome(false);
        } else {
            const reversedText = cleanedText.split('').reverse().join('');
            setIsPalindrome(cleanedText === reversedText);
        }

        setChecked(true);
        
    }

    return (
        <div>
            <h2>Palindrome Checker</h2>
            <input type="text"
                   value={inputText}
                   onChange={(e) => setInputText(e.target.value)} 
            /> 
            <button onClick={checkPalindrome}>Check</button>
            {checked && (
                <p>{isPalindrome ? 'It\'s a palindrome!' : 'This is not a palindrome.'}</p>
            )}
        </div>
    );
}

export default TaskOne;