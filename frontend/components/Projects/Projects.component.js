import styles from './Projects.module.scss';

export default function ProjectsComponent({
    title,
    url = 'default'
}) {
    return (
        <div className={ styles.Projects }>
            <span>title: { title }</span>
            <p>random hardcoded styles - { url }</p>
        </div>
    );
};
