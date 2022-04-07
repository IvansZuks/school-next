import { useState } from 'react';

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

    const [fullLine, setFullLine] = useState(false);

    const [positionY, setPositionY] = useState(0);
    const [positionX, setPositionX] = useState(0);

    function changePosition(x=0, y=0, direction = 0) {
        let test = [...matrixData];
        test[y][x] = 0;
        test[y][x + 1] = 0;
        test[y+1][x] = 1;
        test[y+1][x - 1] = 1;
        setPositionY(y + 1);
        setPositionX(x - 1);
        setMatrixData(test);
        console.log(positionX);
    }

    return (
        <div className={ TetrisWrapper } >
            <FieldComponent matrixData={ matrixData } fullLine={ fullLine } />
            <ActionsComponent 
                setMatrixData={ setMatrixData } 
                matrixData={ matrixData } 
                setFullLine={ setFullLine }
                fullLine={ fullLine }

                positionY={ positionY }
                setPositionX={ setPositionX }
            />
        </div>
    );
}
