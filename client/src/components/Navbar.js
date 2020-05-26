import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import logo from '../assets/logo.svg'
import LoginForm from './LoginForm'
import RegisterForm from '../components/RegisterForm'

import {useSelector,useDispatch} from 'react-redux'
import {logout, setIsLoggedIn, setToken, setUsername, setEmail} from '../store/actions/userAction'
export default function NavBar() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { token, isLoggedIn} = useSelector(state => state.userReducer);
    const [showLogin, setShowLogin] = useState(false);
    const [query, setQuery] = useState('');
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
  
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const doLogout = () => {
        dispatch(logout())
    }

    useEffect(()=> {
        if(localStorage.getItem('reddit_token')){
            dispatch(setIsLoggedIn(true));
            dispatch(setToken(localStorage.getItem('reddit_token')));
            dispatch(setUsername(localStorage.getItem('reddit_username')));
            dispatch(setEmail(localStorage.getItem('reddit_email')));
        }
    }, [isLoggedIn])

    function handleQuery(value){
        setQuery(value)
    }
    function search(e){
        e.preventDefault();
        if(query !== ''){
            history.push(`/search?query=${query}`)
        }
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
                                <form onSubmit={search} >
                                    <div className="input-group">
                                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span></div>
                                        <input onChange={(e)=>handleQuery(e.target.value)} className="form-control" type="search" placeholder="Find a post" aria-label="Search" style={{maxWidth:"75%"}} />
                                    </div>
                                </form>   
                            </li>
                        </ul>
                    </div>
                    <div style={{display: 'flex', marginRight: "10px"}}>
                    {!isLoggedIn && <div className=" btn btn-outline-primary" onClick={handleShowLogin}>
                        LOG IN
                    </div>}

                    {!isLoggedIn && <div className=" btn btn-primary ml-2" onClick={handleShowRegister}>
                        SIGN UP
                    </div>}
                    </div>

                    {isLoggedIn && <div style={{ marginRight: "10px"}} className="btn btn-outline-secondary ml-2" onClick={doLogout}>
                        LOG OUT
                    </div>}
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