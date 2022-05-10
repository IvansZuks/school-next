import FieldComponent from "@/tetris/Field";
import {useCallback, useState} from "react";
import { clone, useEventListener} from '@/utils/hooks';

export default function Move() {
    const [matrixData, setMatrixData] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],

    ]);

    const handler = useCallback(
        (event) => {
            switch (event.code) {
                case 'Space':
                    const moveSquares = matrixData.map((row, matrixIndex) => {
                        return row.map((square, index) => {
                            const center = [(matrixData.length + 1)/2, (row.length + 1)/2];
                            if(row[index] === 1 && row[index + 1] === 1 && row[index - 1] === 1) {
                                console.log('***', center);
                                console.log('***', [matrixIndex, index]);
                            }
                        })

                    });
                    // setMatrixData(moveSquares);
                    return;
                default:
                    return console.log(event);
            }
        },
        [matrixData, setMatrixData]
    );

    useEventListener('keydown', handler);

    return (
        <>
            <FieldComponent matrixData={ matrixData } />
        </>
    );
}