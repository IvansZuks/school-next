import { createContext, useCallback, useState } from 'react';

export const FallingCubeContext = createContext({
    fallingCubeInitialCount: 0,
    updateInitialFallingCubeCount: () => {}
});

export const FallingCubeProvider = ({ children }) => {
    const [fallingCubeInitialCount, setFallingCubeInitialCount] = useState(0);

    const updateInitialFallingCubeCount = useCallback((count) => {
        setFallingCubeInitialCount(parseInt(count));
    }, [setFallingCubeInitialCount]);

    const getContextValue = () => ({
        fallingCubeInitialCount,
        updateInitialFallingCubeCount
    });

    return (
        <FallingCubeContext.Provider value={ getContextValue() }>
            { children }
        </FallingCubeContext.Provider>
    );
};
