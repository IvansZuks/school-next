import { useEffect, useState } from 'react';

export default function DynamicContent({
    addresses
}) {
    const [processedAddresses, setProcessedAddresses] = useState([]);

    useEffect(() => {
        const RESULT = addresses.reduce((acc, value, index) => {
            if (index % 2 === 0)
                acc.push(value);
    
            return acc;
        }, []);
        setProcessedAddresses(RESULT);
    }, [addresses]);

    console.log(processedAddresses);
    
    return (
        <div>
            {
                processedAddresses.map(({ address, type }, index) => {
                    return (
                        <div key={ `list-item${index}` }>
                            <p>{ address }</p>
                            <p>{ type }</p>
                        </div>
                    );
                })
            }
        </div>
    );
}
