import classes from '../style/From.module.css';

export default function Form({ children, className, ...rest }) {
    return (
        <form className={`${className} ${classes.form}`} {...rest}>
            {children}
        </form>
    );
}
