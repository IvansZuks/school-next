import { useState } from 'react';

import {
    MainWrapper
} from './TetrisWrapper.module.scss';

import ActionsComponent from '@/tetris/Actions';
import FieldComponent from '@/tetris/Field';

export default function TetrisWrapper() {
    const [activeMatrixData, setActiveMatrixData] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const [originalMatrixData, setOriginalMatrixData] = useState(activeMatrixData);
    const [fullRow, setFullRow] = useState(false);

    return (
        <div className= { MainWrapper }>
            <FieldComponent matrixData={ activeMatrixData } fullRow={ fullRow }/>
            <ActionsComponent
                matrixData={ activeMatrixData }
                setMatrixData={ setActiveMatrixData }
                setFullRow={ setFullRow }
                fullRow={ fullRow }
                originalMatrixData={ originalMatrixData }
                setOriginalMatrixData= { setOriginalMatrixData }
            />
        </div>
    );
}
