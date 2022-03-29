import { useCallback, useState } from 'react';

export default function TwoButtonsComponent() {
    const [firstButtonStyle, setFirstButtonStyle] = useState();
    const [secondButtonStyle, setSecondButtonStyle] = useState();

    const firstClick = useCallback(() => {  
        secondButtonStyle === 300 ? setSecondButtonStyle(150) : setSecondButtonStyle(300);
    }, [setSecondButtonStyle, secondButtonStyle]);

    const secondClick = useCallback(() => {
        firstButtonStyle === 'green' ? setFirstButtonStyle('') : setFirstButtonStyle('green');
    }, [setFirstButtonStyle, firstButtonStyle]);
        
    return (
        <div>
            <button onClick={ firstClick } style={
                {
                    backgroundColor: `${ firstButtonStyle }`
                }
            }>Check This</button>
            <button onClick={ secondClick } style={
                {
                    width: `${ secondButtonStyle }px`,
                    height: `${ secondButtonStyle }px`
                }
            }>Check This</button>
        </div>
    );
}
