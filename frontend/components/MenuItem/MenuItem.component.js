import { 
    MenuItem,
    MenuItem__Grid,
    MenuItem__Grid__Item
} from './MenuItem.module.scss';

export default function MenuItemComponent({ menuItemList = [] }) {
    return (
        <div className={ MenuItem } >
            <ul className={ MenuItem__Grid } >
                { menuItemList.map((name, index) => {
                    return (
                        <li 
                            className={ MenuItem__Grid__Item } 
                            key={ `list-item-${index}` } 
                            value={ index } 
                        >
                            { name }
                        </li>
                    );
                }, []) }
            </ul>
        </div>
    );
}
