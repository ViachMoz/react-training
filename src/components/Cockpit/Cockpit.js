import React from "react";
import './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    const button_class = ['toggle-button'];

    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    if (props.showPersons) {
        button_class.push('red-btn')
    } else {
        button_class.push('green-btn')
    }

    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really works!</p>
            <button
                className={button_class.join(' ')}
                onClick={props.toggled}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;