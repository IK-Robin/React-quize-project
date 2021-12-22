import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Quiz from '../pages/Quiz';
import Result from '../pages/Result';
import Signup from '../pages/Signup';
import '../style/global.css';
import Layout from './Layout';

const App = function () {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Signup" element={<Signup />} />
                    <Route path="/Quiz" element={<Quiz />} />
                    <Route path="/Result" element={<Result />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
