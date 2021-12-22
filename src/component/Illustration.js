import Images from '../images/signup.svg';
import classess from '../style/Illustration.module.css';

export default function Illustration() {
    return (
        <div className={classess.illustration}>
            <img src={Images} alt="Signup" />
        </div>
    );
}
