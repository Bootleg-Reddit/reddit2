import React, {useState, useEffect} from 'react'
// import {Link} from 'react-router-dom'
import logo from '../assets/alien.png'
import { Modal } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import {signUp, checkToken} from '../store/actions/userAction'

export default function Register(props) {
    const handleShowLogin = () => {
        props.onShowLogin()
        props.onHide()
    }

    const dispatch = useDispatch()
    const token = useSelector((state)=>state.userReducer.token)

    useEffect(()=>{
        dispatch(checkToken())
        props.onHide()
    },[token])

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    const usernameHandle = (e) => {
        setUsername(e.target.value)
    }

    const doRegister = (e) => {
        e.preventDefault();
        dispatch(signUp(email,username,password))
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

                    <form onSubmit={doRegister} method="post">
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                            <input onChange={emailHandle} className="form-control" name="email" type="email" placeholder="email" required maxLength="30"></input>
                        </div>
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-user"></i></span></div>
                            <input onChange={usernameHandle} className="form-control" name="username" type="text" placeholder="Username" required maxLength="30"></input>
                        </div>
                        <div className="input-group mt-3"> 
                            <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span></div>
                            <input onChange={passwordHandle} className="form-control" name="password" type="password" placeholder="Password" required maxLength="30"></input>
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