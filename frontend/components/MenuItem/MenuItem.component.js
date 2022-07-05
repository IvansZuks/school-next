import styles from './MenuItem.module.scss';

export default function MenuItemComponent({ items }) {
    
    return (
        <div>
            { items.map(( item ) => {

                return (
                    item
                );
            }) }
        </div>
    );
};
