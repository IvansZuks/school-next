import { useCallback, useState } from 'react';
import { array } from 'prop-types';

import { MAIN_MENU_ITEMS } from './Menu.config';

import styles from './Menu.module.scss';

import MenuItemComponent from '@/components/MenuItem';

export default function MenuComponent() {
    const [active, setActive] = useState();

    const handleClick = useCallback((index) => {
        setActive(index === active ? null : index);
        console.log(active);
    }, [setActive, active]);

    return (
        <div className={ styles.MenuMain }>
            <ul className={ styles.MenuMain__List }>
                { MAIN_MENU_ITEMS.map(({ mainMenuItem, items }, index) => {
                    return (
                        <div key={ 1 }>
                            <li onClick={ () => handleClick(index) } className={ styles.MenuMain__List__Item }>
                                { mainMenuItem }
                            </li>
                            {
                                active === index && <MenuItemComponent items={ items } />
                            }
                        </div>
                    );
                }) }
            </ul>
        </div>
    );
};
// array.map(({ items }, index) => {})

// useState, onClick, useCallBack, 
