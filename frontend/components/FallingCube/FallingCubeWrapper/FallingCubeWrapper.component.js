import { useState } from 'react';

import CarrierFieldComponent from '@/components/FallingCube/CarrierField';
import InitialCubesComponent from '@/components/FallingCube/InitialCubes';

export default function FallingCubeWrapperComponent() {

    return(
        <div>
            <CarrierFieldComponent />
            <InitialCubesComponent />
        </div>
    );
}
