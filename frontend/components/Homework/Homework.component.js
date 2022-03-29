import { PERSONES } from './Homework.config';

import { Homework } from './Homework.module.scss';

export default function HomeworkComponent() {
    
    const result = PERSONES.reduce((acc, persone, index) => {
        if (index % 2 === 0) {
            acc.push(persone);
        }

        return acc;
    }, []);

    return (
        <div className={ Homework }>
            <ul>{
                result.map(({ name, surename }, index) => 
                    <li key={ `list-item-${ index }` }>{ name } { surename }</li>) 
            }</ul>
        </div>
    );
}
