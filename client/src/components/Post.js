import React from 'react'

export default function Post() {
    return (
        <div className="row">
            <div className="card col-md-1">
                <button className="btn"><i className="far fa-caret-square-up"></i></button> 
                <span style={{textAlign:"center"}}>0</span>
                <button className="btn"><i className="far fa-caret-square-down"></i></button>
            </div>
            <div className="card col-md-11">
            <br/>

                <h5 className="card-title"><a href="/r/cat/1" style={{textDecoration:"none", color:"black"}}>What is the worst thing that you've seen a coworker do and still avoid being fired? </a></h5>
                <div>
                    <a href="/r/cat/1" className="mr-2">0 Comment</a>
                    posted by <span className="mr-2"><a href="/user/buigun">buigun</a></span>
                    from <span><a href="/r/cat">/r/cat</a></span>
                </div>
            </div>
        </div>
    )
}