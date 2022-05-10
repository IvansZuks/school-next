import { useEffect, useState } from 'react';

import {
    Field,
    Field__Matrix,
    Field__Matrix__Square,
    Field__Matrix__Square_active,
    Field__Matrix__Square_delete
} from './Field.module.scss';

export default function FieldComponent({ matrixData, fullLine = false }) {
    const [matrix, setMatrix] = useState([]);

    useEffect(() => {
        // const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0];

        // const fieldMatrixArray = emptyRow.map((_, index) => {
        //     return matrixData.map((column) => 7 - index < column ? 1 : 0);
        // });

        setMatrix(matrixData);
    }, [matrixData]);

    return(
        <div className={ Field }>
            <div className={ Field__Matrix }>
                { matrix.map((row, index) => (
                    row.map((square, key) => (
                        <div
                            key={ `grid-${ key }` } 
                            className={ `
                                ${ Field__Matrix__Square } 
                                ${ square && Field__Matrix__Square_active } 
                                ${ (fullLine && (index == 7)) && Field__Matrix__Square_delete }  
                            ` }>
                        </div>
                    ))
                )) }
            </div>
        </div>
    );
}
