import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

function Navbar() {
    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');
    let [error1, setError1] = useState('');
    let [error2, setError2] = useState('');
    let [bol, setBol] = useState(false);

    useEffect(() => {
        let auth = JSON.parse(localStorage.getItem('auth')) || {};
        if(auth.userName === 'mustafa' && auth.password === '1230')
        setBol(true);
    }, [])

    const enter = () => {
        if (userName !== 'mustafa') {
            setError1('The user name is incorrect. Please enter correct password.')
            return;
        }
        if (password !== '1230') {
            setError1('');
            setError2('The password is incorrect. Please enter correct password.')
            return;
        }

        if (userName === 'mustafa' && password === '1230') {
            setError1('');
            setError2('');
            localStorage.setItem('auth', JSON.stringify({ userName, password }));
            window.location.href = "https://hollidaze-admin-panel.netlify.app";
            setBol(true);
        }
    }

    const logout = () => {
        localStorage.removeItem('auth');
        setBol(false);
        window.location.href = "https://hollidaze-admin-panel.netlify.app";
    }

    return (
        <>
            {!bol && <div className="container auth">
                <div className="row authRow">
                    <div className="col">
                        <h1>Enter Credentials</h1>
                        <p>Please enter user-name and password for the authentication.</p>
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter user name" value={userName} onChange={e => setUserName(e.target.value)} />
                                <p className="error">{error1}</p>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
                                <p className="error">{error2}</p>
                            </div>
                        </form>
                        <button className="btn btn-success btn-sm btn-block mb-2" onClick={enter}>Submit</button>
                        <a href="https://hollidaze.netlify.app"><button className="btn btn-secondary btn-sm btn-block">Go back to website</button></a>
                    </div>
                </div>
            </div>}

            {bol && <div className="container-fluid">
                <div className="row">
                    <div className="col p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <Link to="/" className="navbar-brand" href="#">Hollidaze</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link to="/enquiries">
                                            <a className="nav-link">Enquiries</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contactUs">
                                            <a className="nav-link">Contact Us</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" target="_blank" href="https://hollidaze.netlify.app">Go to Site</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link logout" onClick={logout}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Navbar;