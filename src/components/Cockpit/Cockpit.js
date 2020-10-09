import React, { useEffect, createRef, useContext } from "react";
import './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnClick = createRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        toggleBtnClick.current.click();
    }, []);

    const classes = [];
    const button_class = ['toggle-button'];

    if (props.personsLength <= 2) {
        classes.push('red');
    }
    if (props.personsLength <= 1) {
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
                ref={toggleBtnClick}
                className={button_class.join(' ')}
                onClick={props.toggled}>Toggle Persons</button>
                <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);