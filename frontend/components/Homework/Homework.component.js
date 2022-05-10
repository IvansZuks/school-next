import { PERSONES } from './Homework.config';

import { Homework } from './Homework.module.scss';

export default function HomeworkComponent() {
    
    const result = PERSONES.reduce((acc, person, index) => {
        if (index % 2 === 0) {
            acc.push(person);
        }

        return acc;
    }, []);

    return (
        <div className={ Homework }>
            <ul>{
                result.map(({ name, surname }, index) =>
                    <li key={ `list-item-${ index }` }>{ name } { surname }</li>)
            }</ul>
        </div>
    );
}
