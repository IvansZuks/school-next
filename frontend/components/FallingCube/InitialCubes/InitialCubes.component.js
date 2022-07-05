import { useCallback, useContext, useRef, useState } from 'react';

import { FallingCubeContext } from '../../../context/FallingCubeContext';

import {
    InitialCubes,
    InitialCubes__Button,
    InitialCubes__Input
} from '@/components/FallingCube/CarrierField/CarrierField.module.scss';

export default function InitialCubesComponent({ numberOfBlocks, setNumberOfBlocks }) {
    const [isDisabledInput, setIsDisabledInput] = useState(false);
    const ref = useRef();

    const {
        updateInitialFallingCubeCount
    } = useContext(FallingCubeContext);
    
    const submit = useCallback(() => {
        updateInitialFallingCubeCount();
        console.log('***', updateInitialFallingCubeCount());
        // Will push numberOfBlocks to carrierField
        setIsDisabledInput(true);

        console.log('***', 'Submit button was pressed');
    }, []);

    const reset = useCallback(() => {
        //Should set field to 0
        setIsDisabledInput(false);
        // setCarrierField([]);

        console.log('***', carrierField);
    }, []);

    return(
        <div className={ InitialCubes }>
            <input
                ref={ ref }
                className={ InitialCubes__Input }
                placeholder={ 'Number of blocks' }
                // onChange={ event => setNumberOfBlocks(event.target.value) }
                disabled={ isDisabledInput }
            />
            <button className={ InitialCubes__Button } onClick={ submit }>Submit</button>
            <button className={ InitialCubes__Button } onClick={ reset }>Reset</button>
        </div>
    );
}
