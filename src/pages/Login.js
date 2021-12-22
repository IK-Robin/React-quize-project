import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../component/Button';
import From from '../component/From';
import Illustration from '../component/Illustration';
import TextInput from '../component/TextInput';
// import classess from '../style/Login.modul.css';
import '../style/Login.modul.css';

export default function Login() {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <From action="#" className="login">
                    <TextInput type="text" placeholder="Enter your name" icon="person" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <Button>Login</Button>
                    <div className="info">
                        Dont have an account? <Link to="/Signup">Signup</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
}
