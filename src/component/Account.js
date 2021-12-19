import classess from '../style/Account.module.css';

export default function Account() {
    return (
        <div className={classess.account}>
            <span className="material-icons-outlined" title="Account">
                account_circle
            </span>
            <a href="signup.html">Signup</a>
            {/* <!-- <spa?n class="material-icons-outlined" title="Logout"> logout </spa?n> --> */}
        </div>
    );
}
