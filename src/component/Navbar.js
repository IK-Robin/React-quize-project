import { Link } from 'react-router-dom';
import logo from '../images/logo-bg.png';
import classess from '../style/Nav.module.css';
import Account from './Account';

export default function Navbar() {
    return (
        <nav className={classess.nav}>
            <ul>
                <li>
                    <Link to="/Home" className={classess.brand}>
                        <img src={logo} alt="Learn with Sumit Logo" />
                        <h3>Learn with Sumit</h3>
                    </Link>
                </li>
            </ul>
            <Account />
        </nav>
    );
}
