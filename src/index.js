import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name} {props.age} vee</p>
        </div>
    )
}

const App = () => {
    const nimi = 'Arttu'
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={nimi} age="21"/>
            <Hello name="Satu" age="20"/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'))
