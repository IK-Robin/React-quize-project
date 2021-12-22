import React from 'react';
import Answer from '../component/Answer';
import Progressbar from '../component/ProgressBar';
import classess from '../style/Quiz.module.css';

export default function Quoz() {
    return (
        <>
            <h1>Pick three of your favorite Star Wars Flims</h1>
            <h4>Question can have multiple answers</h4>
            <div className={classess.answers}>
                <Answer type="checkbox" text="" />

                <Progressbar />
            </div>
        </>
    );
}
