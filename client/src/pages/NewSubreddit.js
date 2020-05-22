import React from 'react'
import logo from '../assets/submit.png'
import { useHistory } from 'react-router-dom'

export default function NewPost() {
    const history = useHistory()

    function doCancel() {
        history.goBack()
    }

    return (
        // <div className="row m-4 mt-2">
        <div className="col-md-9 mt-3" style={{margin: "auto"}}>
            <div className="card text-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="path" style={{float:"left"}}>Subreddit Name :</label>
                            <input className="form-control" type="text" placeholder="input new subreddit name" required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Create</button>
                        <button type="button" className="btn btn-danger btn-block mt-3" onClick={doCancel}>Cancel</button>
                    </form>
                </div>
            </div>
         </div>
    // </div>
    )
}