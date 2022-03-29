import { useEffect, useState } from 'react';

import { 
    AdminSecret 
} from './AdminSecret.module.scss';

export default function AdminSecretComponent({ image='default' }) {
    //----If I change image, use effect will work, if state, not
    useEffect(() => {
        // console.log('sss');
    }, [image]);
    //====

    const [count, setCount] = useState(0);

    return (
        <div className={ AdminSecret }>
            <span>test</span>
            <div>
                <p>You clicked { count } times</p>
                <button onClick={ () => setCount(count + 1) }>
                    Click me
                </button>
                { image }
            </div>
        </div>
    );
}
