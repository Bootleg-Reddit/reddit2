import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/alien.png'
import { Modal } from 'react-bootstrap';

export default function Register(props) {
    const handleShowLogin = () => {
        props.onShowLogin()
        props.onHide()
    }

    return (
        <>
        <Modal
        {...props}
        >

            <div className="card text-center">
                <h5 className="card-header">Sign Up</h5>
                <div className="card-body">
                    <img src={logo} height="134" width="134" />

                    <form action="/login" method="post">
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                            <input className="form-control" name="username" type="text" placeholder="email" required maxLength="30"></input>
                        </div>
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span></div>
                            <input className="form-control" name="username" type="text" placeholder="Username" required maxLength="30"></input>
                        </div>
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span></div>
                            <input className="form-control" name="username" type="password" placeholder="Password" required maxLength="30"></input>
                        </div>
                        <button className="btn btn-primary mt-3 mb-2" type="submit" style={{width:"100%"}}>SIGN UP</button>
                        <span id="lower">Already a Redditor? <a href="javascript:void(0)" onClick={handleShowLogin} > LOG IN</a></span>

                    </form>
                </div>
            </div>

        </Modal>


        </>
        )
}