import { useEffect, useState } from 'react';

import {
    Field,
    Field__Matrix,
    Field__Matrix__Square,
    Field__Matrix__Square_active,
    Field__Matrix__Square_delete
} from './Field.module.scss';

export default function FieldComponent({ matrixData, fullLine }) {
    const [matrix, setMatrix] = useState([]);

    // useEffect(() => {
    //     let fieldMatrixArray = matrixData.map((matrixItem, index) => { // const?
    //         let futureMatrix = [0, 0, 0, 0, 0, 0, 0, 0]; // const?
    //         return futureMatrix.map((elem, index) => {
    //             if((index < matrixItem)) { // can be simplified to true false + short return
    //                 return 1;
    //             } else {
    //                 return 0;
    //             }
    //         });
        
    //     });
    //     console.log(fieldMatrixArray);
    //     let rotateMatrix = fieldMatrixArray.map((_, index) => { // can be simplified to one loop
    //         let rotatedFutureMatrix = [0, 0, 0, 0, 0, 0, 0, 0];
            
    //         return rotatedFutureMatrix.map((elem, secondIndex) => {
    //             return elem = fieldMatrixArray[secondIndex][7 - index];
    //         });
           
    //     });

    //     setMatrix(rotateMatrix);
    // }, [matrixData]);

    // @@@@@@@@@@@

    useEffect(() => {
        const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0];

        const fieldMatrixArray = emptyRow.map((_, index) => {
            return matrixData.map((column) => 7 - index < column ? 1 : 0);
        });

        setMatrix(fieldMatrixArray);
        // console.log(fieldMatrixArray);
    }, [matrixData]);

    //@@@@@@@@@@@@

    // useEffect(() => {
    //     const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0];

    //     const fieldMatrixArray = emptyRow.map((_, index) => {
    //         return matrixData.map((column) => {
    //             if((7 - index < column)) {
    //                 return 1
    //             } else {
    //                 return 0
    //             }
    //         });
    //     });

    //     setMatrix(fieldMatrixArray);
    //     // console.log(fieldMatrixArray);
    // }, [matrixData]);

    return(
        <div className={ Field }>
            { matrixData } 
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
