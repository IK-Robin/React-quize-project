import { Link } from 'react-router-dom';
import image from '../images/3.jpg';
import classes from '../style/Video.module.css';

export default function Video() {
    return (
        <Link to="/Quiz">
            <div className={classes.video}>
                <img src={image} alt="Video Title" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </Link>
    );
}
