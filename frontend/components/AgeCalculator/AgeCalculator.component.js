import { useCallback, useRef, useState } from 'react';

import { calculateAge } from '@/utils/defineAge';

export default function AgeCalculatorComponent ({ inputfield, button }) {
    const inputRef = useRef();
    const [calculatedAge, setCalculatedAge] = useState('');

    const handleSubmit = useCallback(() => { 
        const value = inputRef.current.value;
        setCalculatedAge(calculateAge(value));
    }, [inputRef, calculateAge, setCalculatedAge]);

    return (
        <div>
            <input ref={ inputRef } />
            <button onClick={ handleSubmit }>Button CTA</button>
            <p>{ calculatedAge }</p>
        </div>
    );
};
