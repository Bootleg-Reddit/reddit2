import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'
import LoginForm from './LoginForm'
import RegisterForm from '../components/RegisterForm'
import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../store/actions/userAction'


export default function NavBar() {
    // const [logIn, setLogIn] = useState(false)
    const token = useSelector((state)=>state.userReducer.token)
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
  
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const dispatch = useDispatch()
    
    const doLogout = () => {
        dispatch(logout())
    }

    return (
        <>
            <nav className="navbar row navbar-light bg-light sticky-top">
                    <div className="col-md-2">
                        <Link to="/" className="navbar-brand"><img src={logo} alt="loading" style={{height: "32px", width:"120px"}} /></Link>
                    </div>
                    <div className="col-md-6">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <form >
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span></div>
                                        <input className="form-control" type="search" placeholder="Find a post" aria-label="Search" style={{maxWidth:"75%"}} />
                                    </div>
                                </form>   
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2" style={{float:"inline-end"}}>
                    {!token && <div className=" btn btn-outline-primary" onClick={handleShowLogin}>
                        LOG IN
                    </div>}

                    {!token && <div className=" btn btn-primary ml-2" onClick={handleShowRegister}>
                        SIGN UP
                    </div>}

                    {token && <div className="btn btn-outline-secondary ml-2" onClick={doLogout}>
                        LOG OUT
                    </div>}
                    </div>
            </nav>
            <LoginForm
            show={showLogin}
            onHide={handleCloseLogin}
            onShowRegister={handleShowRegister}
            animation={true}
            />

            <RegisterForm
            show={showRegister}
            onHide={handleCloseRegister}
            onShowLogin={handleShowLogin}
            animation={true}
            />

        </>
    )
}