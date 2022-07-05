import { useCallback, useState } from 'react';

export default function TwoButtonsComponent() {
    const [size, setSize] = useState();
    const [color, setColor] = useState();

    const changeSize = useCallback(() => {
        if (size === 300) {
            setSize(150);
        } else {
            setSize(300);
        };
    }, [size, setSize]);

    const changeColor = useCallback(() => {
        if (color === 'purple') {
            setColor('yellow');
        } else {
            setColor('purple');
        }
    }, [color, setColor]);

    return (
        <>
            <div>
                <button onClick={ changeSize } style={ { backgroundColor: `${color}` } }>Left Button</button>
                <button onClick={ changeColor } style={ { width: `${size}px` } }>Right Button</button>
            </div>        
        </>
    );
};
