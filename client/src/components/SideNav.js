import React from 'react'
import {Link} from 'react-router-dom'

export default function SideNav() {
    const home = 'http://localhost:3000/'
    const url = window.location.href;
    const path = 'http://localhost:3000/r/'
    const current_subreddit = url.replace(path, '')

    let temp = url.replace(path, '')
    let temp2 = temp.split('/')
    const current_subreddit2 = temp2[0]

    const mock_subreddits = ['cat', 'programming', 'jokes']
    return (
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link to='/submit' className="btn btn-primary">Create Post</Link>
            <Link to='/createsubreddit' className="btn btn-secondary mt-3">Create Subreddit</Link>
            <br/>
            <p style={{textAlign:"center"}} className="mt-3">Subreddits</p>
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
                data-toggle="pill" href="/" 
                role="tab" 
                aria-controls="v-pills-home" 
                aria-selected="false"
                >
                All
                </a>
            }
            { mock_subreddits.map((subreddit, idx) => {
                return (
                    <div key={idx}>
                    {   (current_subreddit === subreddit || current_subreddit2 === subreddit) &&
                        <a
                        className="nav-link active"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href="/" 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="true"
                        >
                        {subreddit}
                        </a>
                    }
                        {   (current_subreddit !== subreddit &&  current_subreddit2 !== subreddit) &&
                        <a
                        className="nav-link"
                        id="v-pills-home-tab" 
                        data-toggle="pill" href={`/r/${subreddit}`} 
                        role="tab" 
                        aria-controls="v-pills-home" 
                        aria-selected="false"
                        >
                        {subreddit}
                        </a>
                    }
                    </div>

                    )
            })}                
        </div>
    )
}