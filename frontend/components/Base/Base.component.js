import {
    Base,
    Base__Title
} from './Base.module.scss';

export default function BaseComponent() {
    // const handleClick =

    return (
        <div className={ Base }>
            <h1 className={ Base__Title }>Hello world from the component</h1>
            <span>Another hello world</span>
            <br/>
            <button> Click Me </button>
        </div>
    );
}
