import Classess from '../style/Layout.module.css';
import Navbar from './Navbar';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={Classess.main}>
                <div className={Classess.container}>{children}</div>
            </main>
        </>
    );
}
