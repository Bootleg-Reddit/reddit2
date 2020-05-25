import React, {useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getPostById, getComments, createComment } from "../store/actions/postAction";

import Comment from '../components/Comment'
import CompletePost from '../components/CompletePost'
import SideNav from '../components/SideNav'
import {useParams} from 'react-router-dom';
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'


export default function Home() {
    const { token, isLoggedIn} = useSelector(state => state.userReducer);
    const [showLogin, setShowLogin] = useState(false);
    const handleCloseLogin = () => setShowLogin(false);
    const handleShowLogin = () => setShowLogin(true);
  
    const [showRegister, setShowRegister] = useState(false);
    const handleCloseRegister = () => setShowRegister(false);
    const handleShowRegister = () => setShowRegister(true);

    const {id} = useParams();
    console.log(id)
    const home = 'http://localhost:3000/'
    const url = window.location.href;
    const path = 'http://localhost:3000/r/'
    let temp = url.replace(path, '')
    let temp2 = temp.split('/')
    const current_subreddit = temp2[0]
    const dispatch = useDispatch();
    const post = useSelector((state)=> state.postReducer.post);
    const comments = useSelector((state)=> state.postReducer.comments);
    const [comment, setComment ] = useState('')
    const [newComments, setNewComments ] = useState([])
    useEffect(()=>{
        dispatch(getPostById(id));
        dispatch(getComments(id));
    }, [])

    const handleInput = (mewcomment) => {
        setComment(mewcomment)
    }

    const submitComment = (e) => {
        e.preventDefault();

        if(isLoggedIn){
            let data = {
                content: comment
            }
            let newComment = {
                content: comment,
                User: {
                    username: 'You'
                }
            }
            setComment('')
    
            let oldNewComment = newComments
            oldNewComment.unshift(newComment)
            setNewComments(oldNewComment)
            console.log(newComments)
            dispatch(createComment(id, data))    
        }else{
            handleShowLogin()
        }
    }

    return (
        <>
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>{current_subreddit}</h3>
        </div>
        <div className="row m-4 mt-2">
            <div className="col-md-9 mt-3">
                { post &&
                <>
                <CompletePost post={post}/>
                <br/>
                <h1>Comments</h1>
                <form>
                    <textarea onChange={(e)=>handleInput(e.target.value)} value={comment} style={{marginBottom: "10px"}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button onClick={submitComment} type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br/>                
                </>
                }
                {   newComments &&
                    <>
                        {newComments.map((comment, idx)=>{
                            return (
                                <Comment key={idx} comment={comment}/>
                            )
                        })}
                    </>
                }

                {   comments &&
                    <>
                        {comments.map((comment, idx)=>{
                            return (
                                <>
                                { comments.length - idx > newComments.length &&
                                    <Comment key={idx} comment={comment}/>
                                }
                                </>
                            )
                        })}
                    </>
                }
            </div>
            <div className="col-md-3 mt-3">
                <SideNav/>
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