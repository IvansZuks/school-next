import { React, useCallback, useState } from 'react';

import {
    ActionButtons
} from './Actions.module.scss';

import CounterComponent from '@/tetris/Counter';
import { clone, useEventListener } from '@/utils/hooks';

export default function Actions({
    setMatrixData,
    matrixData,
    fullRow,
    setFullRow,
    originalMatrixData,
    setOriginalMatrixData
}) {

    const [score, setScore] = useState(0);
    const [position, setPosition] = useState([0, 3]);

    const reset = useCallback(() => {
        setMatrixData([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ]);
        setScore(0);
    }, [matrixData, setMatrixData, score, setScore]);

    const pressedKeyHandler = useCallback((event) => {
        let positionClone = [...position];
        let backupMatrixData = clone(originalMatrixData);

        //backupMatrixData should be set into the activeMatrixData upon position change
        //activeMatrixData should be set into the originalMatrixData once figure hit bottom

        switch (event.key) {
            case 'ArrowLeft':
                console.log('Left key pressed');
                break;
            case 'ArrowRight':
                positionClone[1] = positionClone[1] + 1;
                setPosition([positionClone[0], positionClone[1] + 1]);
                backupMatrixData[positionClone[0]][positionClone[1]] = 1;
                backupMatrixData[positionClone[0]][positionClone[1] + 1] = 1;
                setMatrixData(backupMatrixData);
                // console.log(backupMatrixData);
                console.log('Right key pressed');
                break;
            case 'ArrowDown':
                console.log('Down key is pressed');
                break;
        }
    }, [position, setPosition, setMatrixData, matrixData]);

    useEventListener('keydown', pressedKeyHandler);

    const setValues = useCallback(() => {
        let secondMatrixData = [...matrixData];
        // const column = Math.round(Math.random() * 6);

        // let row = secondMatrixData.reduce((acc, element, index) => {
        //     if (element[column] || element[column + 1]) {
        //         acc.push(index-1)
        //     }
        //     return acc;
        // }, []) [0] ?? 7;

        // if (row < 0) {
        //     alert("Game Over");
        //     reset();

        //     return;
        // }

        secondMatrixData[position[0]][position[1]] = 1;
        secondMatrixData[position[0]][position[1] + 1] = 1;

        setMatrixData(secondMatrixData);
        const minimizedMatrixData = secondMatrixData.reduce((acc, currentRow) => {
            if (currentRow.some((check) => check === 0)) {
                acc.push(currentRow);
            }

            return acc;
        }, []);

        if (minimizedMatrixData.length < secondMatrixData.length) {
            setTimeout(() => {
                setFullRow(true);
            }, 250);

            setTimeout(() => {
                minimizedMatrixData.unshift([0, 0, 0, 0, 0, 0, 0, 0]);
                setMatrixData(minimizedMatrixData);
            }, 350);
            setScore(score + 1);

            setTimeout(() => {
                setFullRow(false);
            }, 450);
        }
    }, [matrixData, setMatrixData, setFullRow]);

    return (
        <div className= { ActionButtons }>
            <button onClick= { reset }>Reset</button>
            <button onClick={ setValues } style={ { background: 'yellow' } }>Add New Row</button>
            <CounterComponent score={ score } setScore={ setScore }/>
        </div>
    );
}
