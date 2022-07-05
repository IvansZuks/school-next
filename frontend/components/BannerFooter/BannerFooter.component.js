import { useEffect } from 'react';

import {
    BannerFooter,
    BannerFooter__Image
} from './BannerFooter.module.scss';

export default function BannerFooterComponent({ image }) {
    useEffect(() => {
        console.log('***', 'image was changed');
    }, [image]);
    
    return (
        <div className={ BannerFooter }>
            Image: <img className={ BannerFooter__Image } src={ image } />
        </div>
    );
};
