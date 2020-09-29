import React, { useState } from 'react';
import './App.css';
import Person from './person/Person';

class App extends React.Component {
    state = {
        persons: [
            {name: "Stan", age: 26},
            {name: "Steph", age: 23 },
            {name: "Marge", age: 35 }
        ]
    }

    changeNameHandler = () => {
        this.setState({
            persons: [
                {name: "Math", age: 26},
                {name: "John", age: 23 },
                {name: "Lilly", age: 35 }
            ]
        })
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: "Math", age: 26},
                {name:  event.target.value, age: 23 },
                {name: "Lilly", age: 35 }
            ]
        })
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, i'm your new friend, react app.</h1>
                <button
                    style={style}
                    onClick={() => this.changeNameHandler('Max!')}>Change name!</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.changeNameHandler}
                    changed={this.nameChangeHandler}
                >My hobbies: is sitting near a couch.</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;



