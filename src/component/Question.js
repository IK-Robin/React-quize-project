import React from 'react';
import classes from '../style/Question.module.css';
import Answer from './Answer';

export default function Question() {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answer text="This is new props" />
        </div>
    );
}
