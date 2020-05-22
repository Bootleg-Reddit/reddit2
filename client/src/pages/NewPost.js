import React from 'react'
import logo from '../assets/submit.png'
import { useHistory } from 'react-router-dom'

export default function NewPost() {
    const history = useHistory()

    function doCancel() {
        history.goBack()
    }

    return (
        <div className="row m-4 mt-2">
        <div className="col-md-9 mt-3">
            <div className="card text-center">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="path" style={{float:"left"}}>SubReddit :</label>
                            <input className="form-control" list="subreddit" placeholder="select subreddit" required />
                            <datalist id="subreddit">
                                <option value="Cat" />
                                <option value="Jokes" />
                                <option value="Programming" />
                            </datalist>
                        </div>
                        <div className="form-group">
                            <label htmlFor="title" style={{float:"left"}}>Title :</label>
                            <input className="form-control" id="title" type="text" placeholder="type title" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="overview" style={{float:"left"}}>Content :</label>
                            <textarea className="form-control" id="overview" placeholder="type post content" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-4">Post</button>
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