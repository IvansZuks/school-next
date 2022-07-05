import { useEffect } from 'react';

import {
    Banner,
    Banner__Child
} from './Banner.module.scss';

export default function BannerComponent({ annotation, date }) {
    useEffect(() => {
        console.log('***', 'date was changed');
    }, [date]);
    
    return (
        <div className= { Banner }>
            <div className= { Banner__Child }>
                Annotation: { annotation }, Date: { date }
            </div>
        </div>
    );
}
