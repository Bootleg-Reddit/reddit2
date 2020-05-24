import React, {useEffect, useState } from 'react'
import logo from '../assets/submit.png'
import { useHistory } from 'react-router-dom'
import { createSubreddit, getSubreddits } from "../store/actions/subredditAction";
import {useSelector,useDispatch} from 'react-redux'

export default function NewPost() {
    const dispatch = useDispatch();

    const history = useHistory()
    const [subreddit, setSubreddit] = useState('')

    function doCancel() {
        history.goBack()
    }

    useEffect(()=> {
        dispatch(getSubreddits());
    }, [])


    function handleInput(input){
        setSubreddit(input);
        console.log(subreddit)
    }

    function submitSubreddit (e){
        e.preventDefault()
        let data = {
            name: subreddit
        }
        dispatch(createSubreddit(data))
        history.push(`r/${subreddit.toLowerCase()}`);
    }



    return (
        // <div className="row m-4 mt-2">
        <div className="col-md-9 mt-3" style={{margin: "auto"}}>
            <div className="card text-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="path" style={{float:"left"}}>Subreddit Name :</label>
                            <input onChange={(e)=> handleInput(e.target.value)}  className="form-control" type="text" placeholder="input new subreddit name" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4" onClick={submitSubreddit}>Create</button>
                        <button type="button" className="btn btn-danger btn-block mt-3" onClick={doCancel}>Cancel</button>
                    </form>
                </div>
            </div>
         </div>
    // </div>
    )
}