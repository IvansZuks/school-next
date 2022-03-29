import { useCallback, useRef, useState } from 'react';

import { MENU_ITEMS } from './Menu.config';

import { 
    Menu,
    Menu__List,
    Menu__List__Item,
    Menu__List__Item__Wraper,
    Menu__List__Item_active 
} from './Menu.module.scss';

import MenuItemComponent from '@/components/MenuItem';
import { useOutsideClick } from '@/utils/clickOutside';

export default function MenuComponent() {
    const [activeItemIndex, setActiveItemIndex] = useState();
    const ref = useRef();

    const handleClick = useCallback((event) => {
        const menuItemIndex = event.target.value;
        setActiveItemIndex(menuItemIndex === activeItemIndex ? null : menuItemIndex);
    }, [setActiveItemIndex, activeItemIndex]);

    useOutsideClick(ref, () => {
        setActiveItemIndex(null);
    });

    return (
        <div className={ Menu }>
            <ul className={ Menu__List }>
                { MENU_ITEMS.map(({ name, items }, index) => {
                    return (
                        <div ref={ activeItemIndex === index ? ref : null } className={ Menu__List__Item__Wraper } key={ `menu-list-${ index }` }>
                            <li 
                                className={ `
                                    ${Menu__List__Item}
                                    ${activeItemIndex === index ? Menu__List__Item_active : ''}
                                ` }
                                value={ index } 
                                onClick={ handleClick }
                            >
                                { name }
                            </li>
                            { activeItemIndex === index && (
                                <MenuItemComponent 
                                    key={ `component-item-${ index }` } 
                                    menuItemList={ items }
                                />
                            ) }
                        </div>
                    );
                }, []) }
            </ul>
        </div>
    );
}

//ref in component
//
