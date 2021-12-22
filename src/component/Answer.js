import React from 'react';
import classess from '../style/Answer.module.css';
import CheckBox from './CheckBox';

export default function Answer() {
    return <CheckBox className={classess.answer} type="checkbox" text="A New hope 1" />;
}
