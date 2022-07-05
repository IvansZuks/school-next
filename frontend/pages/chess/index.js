import { useCallback, useState } from 'react';

import FieldComponent from '@/tetris/Field';
import { useEventListener } from '@/utils/hooks';

export default function Chess() {
    const [matrix, setMatrix] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const pressKeyHandler = useCallback((event) => {
        switch (event.code) {
            case 'Space':
                // matrix.map((row, index) =
                break;
        }
    });

    useEventListener('keydown', pressKeyHandler );

    return (
        <FieldComponent matrixData={ matrix } />
    );
};
