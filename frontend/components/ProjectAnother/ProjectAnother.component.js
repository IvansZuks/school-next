import { ADDRESSES_LIST } from './ProjectAnother.config';

import styles from './ProjectAnother.module.scss';

import AgeCalculator from '@/components/AgeCalculator';
import Banner from '@/components/Banner';
import BannerFooter from '@/components/BannerFooter';
import DynamicContent from '@/components/DynamicContent';
import TwoButtonsComponent from '@/components/TwoButtons';

export default function ProjectAnotherComponent({
    title = 'No-title-Specified-Yet',
    url = 'No-url-Specified-Yet'
}) {
    return (
        <div className={ styles.ProjectAnother }>
            <span>Project title: { title }</span>
            <br/>
            <p>Project URL: { url }</p>
            <Banner annotation="Here goes an annotation" date="DATEe" />
            <BannerFooter image="https://thumbs.dreamstime.com/b/close-up-sitting-kitten-isolated-white-front-view-brown-shorthair-another-kitty-behind-crop-fluffy-baby-cat-nice-166292841.jpg" />
            <DynamicContent addresses={ ADDRESSES_LIST } />
            <AgeCalculator />
            <TwoButtonsComponent />
        </div>
    );
};
