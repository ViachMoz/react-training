import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
        let persons = null;

        if (this.state.showPersons) {
             persons = (
                 <div>
                     <Persons
                         persons={this.state.persons}
                         clicked={this.deletePersonHandler}
                         changed={this.nameChangeHandler}
                     />
                 </div>
             );
        }

        return (
            <div className="App">
                <Cockpit
                    showPersons={this.state.showPersons}
                    toggled={this.togglePersonsHandler}
                    persons={this.state.persons}
                    title={this.props.appTitle}
                />
                {persons}
            </div>
        );
    }
}

export default App;



