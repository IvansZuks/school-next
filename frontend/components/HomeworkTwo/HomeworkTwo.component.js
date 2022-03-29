import { useCallback, useRef, useState } from 'react';

import { calculate } from '@/utils/date';

export default function HomeworkTwoComponent() {
    const inputRef = useRef();
    const [result, setResult] = useState('');
    const [error, setError] = useState('');  

    const useClick = useCallback(() => {
        const age = inputRef.current.value;

        if (!/^(\d{2})\.(\d{2})\.(\d{2})$/.test(age)) {
            return setError('Wrong date format.');
        }

        const testFormat = age.split('.');

        if (testFormat[0] > 12 || testFormat[1] > 31) {
            return setError('Wrong month or date.');
        }

        setResult(calculate(age));
        setError('');
        
    }, [inputRef, setResult, calculate]);
    
    return (
        <div>
            <input ref={ inputRef } placeholder="mm.dd.yy" 
                onKeyPress={ (e) => !/[0-9\.]/.test(e.key) && e.preventDefault() }/>
            <button onClick={ useClick }>Submit</button>
            <p>{ result } { error }</p>
        </div>
    );
}
