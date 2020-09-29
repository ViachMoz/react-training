import React from 'react';
import './App.css';
import Person from './person/Person';

class App extends React.Component {
    state = {
        persons: [
            {id: 1, name: "Stan", age: 26},
            {id: 2, name: "Steph", age: 23 },
            {id: 3, name: "Marge", age: 35 }
        ],
        showPersons: false
    }

    deletePersonHandler = (personIndex ) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons })
    }

    nameChangeHandler = (event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
             persons = (
                 <div>
                     {this.state.persons.map((person, index) => {
                        return <Person
                            click={() =>  this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler( event, person.id)}
                        />
                     })}
                 </div>
             );
        }

        return (
            <div className="App">
                <h1>Hi, i'm your new friend, react app.</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons</button>
                {persons}
            </div>
        );
    }
}

export default App;



