import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withCLass from "../hoc/withClass";
import Aux from '../hoc/Aux'
import AuthContext from '../context/auth-context'

class App extends React.Component {
    state = {
        persons: [
            {id: 1, name: "Stan", age: 26},
            {id: 2, name: "Steph", age: 23 },
            {id: 3, name: "Marge", age: 35 }
        ],
        showPersons: false,
        authenticated: false
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.persons !== this.state.persons) {
            return true;
        } else {
            return false;
        }
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

    loginHandler = () => {
        this.setState({authenticated: true})
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
                         isAuthenticated={this.state.authenticated}
                     />
                 </div>
             );
        }

        return (
            <Aux classes="App">
                <AuthContext.Provider
                    value={{
                        authenticated: this.state.authenticated,
                        login: this.loginHandler
                    }}
                >
                    <Cockpit
                        showPersons={this.state.showPersons}
                        toggled={this.togglePersonsHandler}
                        personsLength={this.state.persons.length}
                        title={this.props.appTitle}
                    />
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withCLass(App, "App");



