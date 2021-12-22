import React from 'react';
import classess from '../style/Button.module.css';

export default function Button({ children, className }) {
    return (
        <button type="button" className={` ${classess.button} ${className}`}>
            {children}
        </button>
    );
}
