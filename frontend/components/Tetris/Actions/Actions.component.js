import { useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { position } from 'tailwindcss/lib/plugins';

import {
    Actions,
    Actions__Btn,
    Actions__Score,
    Actions__Score__Text
} from './Actions.module.scss';

import { useEventListener } from '@/utils/hooks';

export default function ActionsComponent({ 
    setMatrixData = () => {}, 
    matrixData = [],
    setFullLine = () => {},
    positionY = 0,
    setPositionX = () => {}
}) {
    const [score, setScore] = useState(0);
    const [isButtonLocked, setIsButtonLocked] = useState(false);
    const [coordinates, setCoordinates] = useState([0, 3]);

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
        setIsButtonLocked(false);
    }, [setMatrixData, setScore]);

    const handleAdd = useCallback(() => {
        setIsButtonLocked(true);
        let previousMatrixData = [...matrixData];
        console.log(coordinates);
        // let row = previousMatrixData.reduce((acc, row, index) => {
        //     if (row[randomIndex] || row[randomIndex + 1]) {
        //         acc.push(index - 1);
        //     }
        //
        //     return acc;
        // }, [])[0] ?? 7;
        //
        // if(row < 0) {
        //     alert('game over!!!!');
        //     return
        // }

        previousMatrixData[coordinates[0]][coordinates[1]] = 1;
        previousMatrixData[coordinates[0]][coordinates[1] + 1] = 1;

        setMatrixData(previousMatrixData);

        // let result = previousMatrixData.reduce((acc, row, index) => {
        //     if (row.some((elem) => elem === 0)) {
        //         acc.push(row);
        //     }
        //
        //     return acc;
        // }, []);
        //
        // if(result.length < previousMatrixData.length) {
        //     result.unshift([0,0,0,0,0,0,0,0]);
        //     setMatrixData(result);
        //     setScore(score + 1);
        // }
        
    }, [setMatrixData, setScore, setFullLine, matrixData, score]);

    // const changePosition = useCallback(() => {
    //     let activeMatrix = [...matrixData];
    //
    // }, []);

    // console.log(matrixData);
    const handler = useCallback(
        (event) => {
            let coordinatesClone = [...coordinates];
            switch (event.keyCode) {
                case 37:
                    // setCoordinates()
                    console.log('Left key');
                    
                    return;
                case 39:
                    console.log('Right key');
                    
                    return;
                case 40:
                    console.log('Down key');
                    
                    return;
                case 32:
                    console.log('Space key');
                    
                    return;
                default:
                    return console.log(event);
            }
        },
        []
    );

    useEventListener('keydown', handler);

    return (
        <div className={ Actions }>
            <button className={ Actions__Btn } onClick={ handleReset }>Reset</button>
            <button className={ Actions__Btn } onClick={ handleAdd } disabled={ isButtonLocked }>Start</button>
            <div className={ Actions__Score }>
                <span className={ Actions__Score__Text }>Your score is:</span>
                <span>{ score }</span>
            </div>
        </div>
    );
}
