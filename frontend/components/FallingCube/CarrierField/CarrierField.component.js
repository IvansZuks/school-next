import { useContext, useEffect, useState } from 'react';

import { FallingCubeContext } from '../../../context/FallingCubeContext';

export default function CarrierFieldComponent({ numberOfBlocks }) {
    const [carrierField, setCarrierField] = useState([]);
    
    const { 
        fallingCubeInitialCount
    } = useContext(FallingCubeContext); 
    
    useEffect(() => {
        setCarrierField(fallingCubeInitialCount);
    }, [setCarrierField, fallingCubeInitialCount]);

    return (
        <div>
            { carrierField }
        </div>
    );
}
