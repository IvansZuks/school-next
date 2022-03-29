import { useCallback, useState } from 'react';

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
        setMatrixData([0, 0, 0, 0, 0, 0, 0, 0]);
        setScore(0);
    }, [setMatrixData, setScore]);

    const handleAdd = useCallback(() => {
        const index = Math.floor(Math.random() * 8);
        let previousMatrixData = [...matrixData];
        previousMatrixData[index] = previousMatrixData[index] + 1;
        setMatrixData(previousMatrixData);
        
        if (!previousMatrixData.some((elem) => elem === 0)) {
            setIsButtonLocked(true);

            setTimeout(() => {
                setScore(score + 1);
                setFullLine(true);
            }, 1200);
            
            setTimeout(() => {  
                previousMatrixData = previousMatrixData.map((elem) => elem - 1);
                setMatrixData(previousMatrixData);
                setFullLine(false);
                setIsButtonLocked(false);
            }, 2000);
        }

        if (previousMatrixData.some((elem) => elem == 8)) {
            alert('Your final Score is: ' + score);
            setMatrixData([0, 0, 0, 0, 0, 0, 0, 0]);
            setScore(0);
            setFullLine(false);
        }

    }, [setMatrixData, setScore, setFullLine, matrixData, score]);

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
