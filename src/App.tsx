import classNames from 'classnames';
import './App.css';

function App() {
    return (
        <div>
            <h1 className={classNames('text-3xl', 'font-bold',' text-cyan-700')}>Hello world!</h1>
            <button className={classNames("btn")}>Hello daisyUI</button>
        </div>
    );
}

export default App;
