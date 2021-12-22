import { Link } from 'react-router-dom';
import Button from '../component/Button';
import CheckBox from '../component/CheckBox';
import From from '../component/From';
import Illustration from '../component/Illustration';
import TextInput from '../component/TextInput';
import '../style/Signup.modul.css';

export default function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <From className="signup" action="#">
                    <TextInput type="text" placeholder="Enter your name" icon="person" />

                    <TextInput type="text" placeholder="Enter email" icon=" alternate_email" />

                    <TextInput type="password" placeholder="Enter password" icon="lock" />

                    <TextInput type="password" placeholder="Enter password" icon="lock_clock" />

                    <CheckBox type="checkbox" text="I agree to the Terms Conditions" />
                    <Button>Submit Now</Button>

                    <div className="info">
                        Already have an account? <Link to="/Login">Login</Link> instead.
                    </div>
                </From>
            </div>
        </>
    );
}
