import React from 'react'
import {Link} from 'react-router-dom'

export default function SideNav() {
    return (
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <Link to='/new-post' className="btn btn-success">Create Post</Link>
            <p style={{textAlign:"center"}} className="mt-3">SubReddit</p>
            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="/r/cat" role="tab" aria-controls="v-pills-profile" aria-selected="false">Cat</a>
            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="/r/jokes" role="tab" aria-controls="v-pills-messages" aria-selected="false">Jokes</a>
            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="/r/programming" role="tab" aria-controls="v-pills-settings" aria-selected="false">Programming</a>
        </div>
    )
}