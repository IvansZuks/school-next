import { useState } from 'react';
import {clone} from "@/utils/hooks";

import {
    TetrisWrapper
} from './TetrisWrapper.module.scss';

import ActionsComponent from '@/tetris/Actions';
import FieldComponent from '@/tetris/Field';

export default function TetrisWrapperComponent() {
    const [matrixData, setMatrixData] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const [helperMatrix, setHelperMatrix] = useState(clone(matrixData));
    const [fullLine, setFullLine] = useState(false);

    return (
        <div className={ TetrisWrapper } >
            <FieldComponent matrixData={ matrixData } fullLine={ fullLine } />
            <ActionsComponent 
                setMatrixData={ setMatrixData } 
                matrixData={ matrixData } 
                setFullLine={ setFullLine }
                fullLine={ fullLine }
                helperMatrix={ helperMatrix }
                setHelperMatrix={ setHelperMatrix }
            />
        </div>
    );
}
