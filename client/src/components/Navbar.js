import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function NavBar() {
    const [logIn, setLogIn] = useState(false)

    return (
            <nav className="navbar row navbar-light bg-light sticky-top">
                    <div className="col-md-2">
                        <Link to="/" className="navbar-brand"><img src={logo} alt="loading" style={{height: "32px", width:"120px"}} /></Link>
                    </div>
                    <div className="col-md-8">
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
                    <Link to="/login" className="btn btn-outline-primary">LOG IN</Link>
                    <Link to="/signup" className="btn btn-primary ml-2">SIGN UP</Link>
                    {logIn && <Link to="/" className="btn btn-outline-secondary ml-2">Log Out</Link>}
                    </div>
            </nav>
    )
}