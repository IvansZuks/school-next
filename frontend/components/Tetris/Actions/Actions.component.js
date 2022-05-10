import { useCallback, useState } from 'react';
import { clone, checkMatrix} from "@/utils/hooks";

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
    helperMatrix = [],
    setHelperMatrix = () => {}
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

        previousMatrixData[coordinates[0]][coordinates[1]] = 1;
        previousMatrixData[coordinates[0]][coordinates[1] + 1] = 1;
        setMatrixData(previousMatrixData);

    }, [setMatrixData, setScore, setFullLine, matrixData, score]);

    const handler = useCallback(
        (event) => {
            let coordinatesClone = [...coordinates];
            let helperMatrixClone = clone(helperMatrix);
            switch (event.keyCode) {
                case 37:
                    coordinatesClone[1] = coordinatesClone[1] - 1 > 0 ? coordinatesClone[1] - 1 : 0;

                    if (helperMatrix[coordinatesClone[0]][coordinatesClone[1]] === 1) {
                        coordinatesClone[1] = coordinatesClone[1] + 1;
                    }

                    setCoordinates([coordinatesClone[0], coordinatesClone[1]]);
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1]] = 1;
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1] + 1] = 1;
                    setMatrixData(helperMatrixClone);

                    if (checkMatrix(helperMatrix, coordinatesClone, 1)) {
                        setCoordinates([0, 3]);
                        setHelperMatrix(helperMatrixClone);
                    }

                    console.log('Left key');
                    return;
                case 39:
                    coordinatesClone[1] = coordinatesClone[1] + 1 < 7 ? coordinatesClone[1] + 1 : 6;

                    if (helperMatrix[coordinatesClone[0]][coordinatesClone[1] + 1] === 1) {
                        coordinatesClone[1] = coordinatesClone[1] - 1;
                    }

                    setCoordinates([coordinatesClone[0], coordinatesClone[1]]);
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1]] = 1;
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1] + 1] = 1;
                    setMatrixData(helperMatrixClone);

                    if (checkMatrix(helperMatrix, coordinatesClone, 1)) {
                        setCoordinates([0, 3]);
                        setHelperMatrix(helperMatrixClone);
                    }

                    console.log('Right key');
                    return;
                case 40:
                    coordinatesClone[0] = coordinatesClone[0] + 1;
                    setCoordinates([coordinatesClone[0], coordinatesClone[1]]);
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1]] = 1;
                    helperMatrixClone[coordinatesClone[0]][coordinatesClone[1] + 1] = 1;
                    setMatrixData(helperMatrixClone);

                    if (checkMatrix(helperMatrix, coordinatesClone, 1)) {
                        setCoordinates([0, 3]);
                        setHelperMatrix(helperMatrixClone);
                    }

                    if (coordinatesClone[0] === 7) {
                        setCoordinates([0, 3]);
                        setHelperMatrix(helperMatrixClone);
                    }

                    console.log('Down key');
                    return;
                case 32:
                    console.log('Space key');
                    
                    return;
                default:
                    return console.log(event);
            }
        },
        [setCoordinates, coordinates, helperMatrix, setHelperMatrix, setMatrixData, matrixData]
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
