import React from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './person/Person';

const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    color: white;
    &:hover {
        background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
        color: black;
    }
`;

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

        const classes = [];

        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, i'm your new friend, react app.</h1>
                <p className={classes.join(' ')}>This is really works!</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
                    Toggle Persons
                </StyledButton>
                {persons}
            </div>
        );
    }
}

export default App;



