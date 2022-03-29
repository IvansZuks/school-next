import styles from './Team.module.scss';

export default function TeamComponent({ name = '', surename = '' }) {
    return (
        <div>
            <span className={ styles.Team }>Name is: { name }</span>
            <br/>
            <span>Surename is: { surename }</span>
        </div>
    );
}
