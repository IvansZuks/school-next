import { useState } from 'react';
import { add } from 'date-fns';

import {
    CounterWrapper
} from './Counter.module.scss';

export default function CounterComponent({ score, setScore }) {
    
    return (
        <div className= { CounterWrapper }>
            <h1>
                { score }
            </h1>
        </div>
    );
}
