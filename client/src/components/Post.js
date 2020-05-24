import React, {useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'

import LoginForm from './LoginForm'
import RegisterForm from '../components/RegisterForm'
import { vote, removeVote } from "../store/actions/postAction";


export default function Post(props) {
    const dispatch = useDispatch();

    const [upvote, setUpvote] = useState(0);
    const [downvote, setDownvote] = useState(0);

    const { token, isLoggedIn} = useSelector(state => state.userReducer);
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
  
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const clickUpvote = ()=>{
        if(isLoggedIn == true){
            console.log('tesst')
            setDownvote(0);
            if(upvote === 1){
                // setUpvote(0);
                // dispatch(removeVote(props.post.id))
            }else{
                setUpvote(1);
                dispatch(vote(props.post.id, true))
            }
        }else{
            handleShowLogin();
        }
    }

    const clickDownvote = ()=>{
        if(isLoggedIn == true){
            setUpvote(0);
            if(downvote === 1){
                // setDownvote(0);
                // dispatch(removeVote(props.post.id))
            }else{
                setDownvote(1);
                dispatch(vote(props.post.id, false)) 
            }
        }else{
            handleShowLogin();
        }
    }

    return (
        <>
            <div className="row">
                <div className="card col-md-1">
                    <button className="btn" onClick={()=>clickUpvote()}><i className="far fa-caret-square-up"></i></button> 
        <span style={{textAlign:"center"}}>{props.post.upvotes - props.post.downvotes + upvote - downvote}</span>
                    <button className="btn" onClick={()=>clickDownvote()}><i className="far fa-caret-square-down"></i></button>
                </div>
                <div className="card col-md-11">
                <br/>
                    <h5 className="card-title"><a href={`/r/${props.post.Subreddit.name}/${props.post.id}`} style={{textDecoration:"none", color:"black"}}>{props.post.title} </a></h5>
                    <div>
        Posted by <span className="mr-2">{props.post.User.username}</span>
                        from <span><a href={`/r/${props.post.Subreddit.name}`}>/r/{props.post.Subreddit.name}</a></span>
                    </div>
                </div>
            </div>
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