import React, {useState, useEffect}  from 'react'
// import {Link} from 'react-router-dom'
import logo from '../assets/circle.png'
// import RegisterForm from '../components/RegisterForm'
import { Modal } from 'react-bootstrap';
// import RegisterForm from './RegisterForm'
import {useDispatch,useSelector} from 'react-redux'
import {login, checkToken} from '../store/actions/userAction'


export default function Login(props) {
    const handleShowRegister = () => {
        props.onShowRegister()
        props.onHide()
    }
        
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const token = useSelector((state)=>state.userReducer.token)

    const dispatch = useDispatch()

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }

    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    useEffect(()=>{
        dispatch(checkToken())
        props.onHide()
    },[token])

    const doLogin = (e) => {
        e.preventDefault();
        dispatch(login(email,password))
    }

    return (
        <Modal
        {...props}
        >
        <div className="card text-center">
            <h5 className="card-header">Login</h5>
            <div className="card-body">
                <img src={logo} height="134" width="134" alt="logo"/>
                <form onSubmit={doLogin} method="post">
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                        <input onChange={emailHandle} className="form-control" name="email" type="email" placeholder="Email" required maxLength="30"></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-lock"></i></span></div>
                        <input onChange={passwordHandle} className="form-control" name="username" type="password" placeholder="Password" required maxLength="30"></input>
                    </div>
                    <button className="btn btn-primary mt-3 mb-2" type="submit" style={{width:"100%"}}>LOG IN</button>
                    <span id="lower">New to Reddit? <a href="javascript:void(0)" onClick={handleShowRegister}>SIGN UP</a></span>
                </form>
            </div>
        </div>
        </Modal>

        
    )
}