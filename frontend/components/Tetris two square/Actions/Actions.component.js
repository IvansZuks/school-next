import { useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import {
    Actions,
    Actions__Btn,
    Actions__Score,
    Actions__Score__Text
} from './Actions.module.scss';

export default function ActionsComponent({ 
    setMatrixData = () => {}, 
    matrixData = [],
    setFullLine = () => {}
}) {
    const [score, setScore] = useState(0);
    const [isButtonLocked, setIsButtonLocked] = useState(false);

    const handleReset = useCallback(() => {
        setMatrixData([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]]);
        setScore(0);
    }, [setMatrixData, setScore]);

    const handleAdd = useCallback(() => {
        const randomIndex = Math.floor(Math.random() * 7);
        let previousMatrixData = [...matrixData];

        let row = previousMatrixData.reduce((acc, row, index) => {
            if (row[randomIndex] || row[randomIndex + 1]) {
                acc.push(index - 1);
            }

            return acc;
        }, [])[0] ?? 7;

        if(row < 0) {
            alert('game over!!!!');
            
            return;
        }

        previousMatrixData[row][randomIndex] = 1;
        previousMatrixData[row][randomIndex + 1] = 1;

        setMatrixData(previousMatrixData);

        let result = previousMatrixData.reduce((acc, row, index) => {
            if (row.some((elem) => elem === 0)) {
                acc.push(row);
            }

            return acc;
        }, []);

        if(result.length < previousMatrixData.length) {
            result.unshift([0, 0, 0, 0, 0, 0, 0, 0]);
            setMatrixData(result);
            setScore(score + 1);
        }
        
    }, [setMatrixData, setScore, setFullLine, matrixData, score]);

    console.log(matrixData);

    return (
        <div className={ Actions }>
            <button className={ Actions__Btn } onClick={ handleReset }>Reset</button>
            <button className={ Actions__Btn } onClick={ handleAdd } disabled={ isButtonLocked }>Add</button>
            <div className={ Actions__Score }>
                <span className={ Actions__Score__Text }>Your score is:</span>
                <span>{ score }</span>
            </div>
        </div>
    );
}
