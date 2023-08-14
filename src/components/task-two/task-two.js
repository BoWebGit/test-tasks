import React, {useState} from "react";

function TaskTwo() {
    const [matrix, setMatrix] = useState([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]);

    const [rotationLeft, setRotationLeft] = useState(false);

    const rotateMatrix = (matrix, direction) => {
        const n = matrix.length;
        const rotatedMatrix = [];
    
        if (direction) {
            for (let i = 0; i < n; i++) {
                const newRow = [];
                for (let j = n - 1; j >= 0; j--) {
                  newRow.push(matrix[j][i]);
                }
                rotatedMatrix.push(newRow);
            }
        } else {
            for (let i = n - 1; i >= 0; i--) {
                const newRow = [];
                for (let j = 0; j < n; j++) {
                  newRow.push(matrix[j][i]);
                }
                rotatedMatrix.push(newRow);
            }
        }
    
        return rotatedMatrix;
    };

    const handleRotateClick = () => {
        const rotatedMatrix = rotateMatrix(matrix, rotationLeft);
        setTimeout(() => {
          setMatrix(rotatedMatrix);
        }, 1000);
      };

    return (
        <div>
            <h2>Matrix rotation</h2>
            <div className="matrix">
                {matrix.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                    <div className="cell" key={columnIndex}>
                        {cell}
                    </div>
                    ))}
                </div>
                ))}
            </div>
            <div className="controls">
                <label>
                <input
                    type="radio"
                    value="left"
                    checked={rotationLeft === 'left'}
                    onChange={() => setRotationLeft('left')}
                />
                Left
                </label>
                <button onClick={handleRotateClick}>
                    Rotate
                </button>
            </div>
        </div>
    );
}

export default TaskTwo;