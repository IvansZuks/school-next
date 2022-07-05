import { useEffect, useState } from 'react';

import {
    MainWrapper,
    MainWrapper__Cell,
    MainWrapper__Cell_active,
    MainWrapper__Cell_delete
} from './Field.module.scss';

export default function FieldComponent({ matrixData, fullRow = false }) {
    const [matrix, setMatrix] = useState([]);

    useEffect(() => {
        setMatrix(matrixData);
        console.log('***', matrixData);
    }, [matrixData]);
    // console.log(fullRow);

    return (
        <div className={ MainWrapper }>
            {
                matrix.map((row, index) => {
                    return row.map((cell) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className= { `
                                ${ MainWrapper__Cell }
                                ${ cell && MainWrapper__Cell_active }
                                ${ (fullRow && (index === 7)) && MainWrapper__Cell_delete }
                            ` }>
                            </div>
                        );
                    });
                })
            }
        </div>
    );
};
