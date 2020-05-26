import React, {useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getSubreddits } from "../store/actions/subredditAction";
import { setPost } from "../store/actions/postAction";
import {Link, useHistory} from 'react-router-dom'
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

export default function SideNav() {
    const home = 'http://localhost:3000/'
    const url = window.location.href;
    const path = 'http://localhost:3000/r/'
    let current_subreddit = url.replace(path, '')
    
    let temp = url.replace(path, '')
    let temp2 = temp.split('/')
    const current_subreddit2 = temp2[0]
    if (current_subreddit.indexOf('/')){
        current_subreddit = current_subreddit.split('/')[0]
    }

    const dispatch = useDispatch();
    const subreddits = useSelector((state)=> state.subredditReducer.subreddits);
    const username = useSelector((state)=> state.userReducer.username);
    const isLoggedIn = useSelector((state)=> state.userReducer.isLoggedIn);
    let subredditsLoading = useSelector((state)=> state.subredditReducer.subredditsLoading);
    const history = useHistory()

    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
  
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    useEffect(()=> {
        dispatch(getSubreddits());
    }, [])

    function toNewPost(e){
        e.preventDefault()
        if(isLoggedIn){
            setPost(null)
            history.push(`/submit`);
        }else{
            handleShowLogin()
        }
    }

    function createSubreddit(e){
        e.preventDefault()
        if(isLoggedIn){
            setPost(null)
            history.push(`/createsubreddit`);
        }else{
            handleShowLogin()
        }
    }

    function enterChatroom(e){
        e.preventDefault()
        if(username && current_subreddit && isLoggedIn){
            history.push(`/chat?name=${username}&room=${current_subreddit}`)
        }
        else{
            if(!isLoggedIn){
                handleShowLogin()
            }
        }        
    }

    return (
        <>

        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <div className="nav flex-column nav-pills" style={{border: "1px solid silver", padding:"7px", borderRadius: "5px"}}>

            <div onClick={toNewPost} className="btn btn-primary" style={{marginBottom:'7px'}}>Create Post</div>
            <div onClick={createSubreddit} className="btn btn-primary">Create Subreddit</div>
            {   home !== url &&
                <>
                <div onClick={enterChatroom} style={{marginTop:'7px'}} className="btn btn-success">Enter Chatroom</div>
                </>
            }
            </div>
            <br/>

            <div style={{border: "1px solid silver", padding: "5px", borderRadius: "5px"}}>
            <h3 style={{textAlign:"center", color: 'grey'}} className="mt-3">Subreddits</h3>
            <hr/>

            {   subredditsLoading &&
                <>
                    <div style={{marginLeft: "50%"}} className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </>
            }

            { !subredditsLoading &&

                <>
                    {   (url === home )  &&
                        <a
                        className="nav-link active"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href="/" 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="true"
                        >
                        All
                        </a>
                    }
                    {   url !== home &&
                        <a
                        className="nav-link"
                        id="v-pills-home-tab" 
                        data-toggle="pill" 
                        href="/" 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="false"
                        >
                        All
                        </a>
                    }
                    { subreddits &&
                    <>
                    { subreddits.map((subreddit, idx) => {
                        return (
                            <div key={idx}>
                            {   (current_subreddit === subreddit.name.toLowerCase() || current_subreddit2 === subreddit.name.toLowerCase()) &&
                                <a
                                className="nav-link active"
                                id="v-pills-home-tab" 
                                data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                                role="tab" 
                                aria-controls="v-pills-home" 
                                aria-selected="true"
                                >
                                {subreddit.name}
                                </a>
                            }
                            {   (current_subreddit !== subreddit.name.toLowerCase() &&  current_subreddit2 !== subreddit.name.toLowerCase()) &&
                                <a
                                className="nav-link"
                                id="v-pills-home-tab" 
                                data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                                role="tab" 
                                aria-controls="v-pills-home" 
                                aria-selected="false"
                                >
                                {subreddit.name}
                                </a>
                            }
                            </div>
                        )
                    })}   
                    </>   
                    }
                </>
            }

            {/* {   (url === home )  &&
                <a
                className="nav-link active"
                id="v-pills-home-tab" 
                data-toggle="pill" href="/" 
                role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="true"
                >
                All
                </a>
            }
            {   url !== home &&
                <a
                className="nav-link"
                id="v-pills-home-tab" 
                data-toggle="pill" 
                href="/" 
                role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="false"
                >
                All
                </a>
            }
            { subreddits &&
            <>
            { subreddits.map((subreddit, idx) => {
                return (
                    <div key={idx}>
                    {   (current_subreddit === subreddit.name.toLowerCase() || current_subreddit2 === subreddit.name.toLowerCase()) &&
                        <a
                        className="nav-link active"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="true"
                        >
                        {subreddit.name}
                        </a>
                    }
                    {   (current_subreddit !== subreddit.name.toLowerCase() &&  current_subreddit2 !== subreddit.name.toLowerCase()) &&
                        <a
                        className="nav-link"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href={`/r/${subreddit.name.toLowerCase()}`} 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="false"
                        >
                        {subreddit.name}
                        </a>
                    }
                    </div>
                )
            })}   
            </>   
            } */}
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