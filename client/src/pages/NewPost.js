import React, {useEffect, useState } from 'react'
import logo from '../assets/submit.png'
import { useHistory } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { getSubreddits } from "../store/actions/subredditAction";
import { createPost } from "../store/actions/postAction";



export default function NewPost() {
    const dispatch = useDispatch();

    const history = useHistory()
    const [subreddit, setSubreddit] = useState(null)
    const [content, setContent] = useState(null)
    const [title, setTitle] = useState(null)
    const subreddits = useSelector((state)=> state.subredditReducer.subreddits);
    const post = useSelector((state)=> state.postReducer.post);

    useEffect(()=> {
        dispatch(getSubreddits());
    }, [])

    useEffect(()=> {
        if(post !== null){
            console.log(post)
            history.push(`r/${subreddit.toLowerCase()}/${post.id}`);
        }
    }, [post])

    function doCancel() {
        history.goBack()
    }
    function handleInput(data, datatype){
        switch(datatype){
            case 'subreddit': 
                setSubreddit(data)
                break;
            case 'title': 
                setTitle(data)
                break;
            case 'content': 
                setContent(data)
                break;
            default:
                break;
        }
    }
    function submitPost(e){
        e.preventDefault()
        console.log(subreddit, title, content)
        let data = {subreddit: subreddit, title: title, content: content}
        console.log(data)
        dispatch(createPost(data))
        // history.push(`r/${subreddit.toLowerCase()}`);
    }

    return (
        <div className="row m-4 mt-2">
        <div className="col-md-9 mt-3">
            <div className="card text-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="path" style={{float:"left"}}>Subreddit :</label>
                            <input onChange={(e)=> handleInput(e.target.value, 'subreddit')} className="form-control" list="subreddit" placeholder="select subreddit" required />
                            <datalist id="subreddit">
                                {subreddits.map((item, idx)=> {
                                    return (
                                        <option key={idx} value={item.name}/>
                                    )
                                })}
                            </datalist>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title" style={{float:"left"}}>Title :</label>
                            <input onChange={(e)=> handleInput(e.target.value, 'title')} className="form-control" id="title" type="text" placeholder="type title" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="overview" style={{float:"left"}}>Content :</label>
                            <textarea onChange={(e)=> handleInput(e.target.value, 'content')} className="form-control" id="overview" placeholder="type post content" required></textarea>
                        </div>
                        <button onClick={submitPost} type="submit" className="btn btn-primary btn-block mt-4">Post</button>
                        <button type="button" className="btn btn-danger btn-block mt-3" onClick={doCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-md-3 mt-3">
            <div className="card">
                <ul className="list-group list-group-flush">
                    <div className="list-group-item">
                        <img src={logo} height="32" width="32" />
                        <span className="ml-2">Post to Reddit</span>
                    </div>
                    <li className="list-group-item">1. Remember the human</li>
                    <li className="list-group-item">2. Behave like you would in real life</li>
                    <li className="list-group-item">3. Look for the original source of content</li>
                    <li className="list-group-item">4. Search for duplicates before posting</li>
                    <li className="list-group-item">5. Read the community’s rules</li>
                </ul>
            </div>
        </div>
    </div>
    )
}