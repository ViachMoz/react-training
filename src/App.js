import React, { useState } from 'react';
import './App.css';
import Person from './person/Person';

const App = () => {
    const [ personsState, setPersons ] = useState({
        persons: [
            {name: "Stan", age: 26},
            {name: "Steph", age: 23 },
            {name: "Marge", age: 35 }
        ]
    })

    const changeNameHandler = () => {
        setPersons({
            persons: [
                {name: "Math", age: 26},
                {name: "John", age: 23 },
                {name: "Lilly", age: 35 }
            ]
        })
    }

    return (
        <div className="App">
            <h1>Hi, i'm your new friend, react app.</h1>
            <button onClick={changeNameHandler}>Change name!</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: is sitting near a couch.</Person>
            <Person name={personsState.persons[2].name} age={personsState .persons[2].age} />
        </div>
    );
}

export default App;



