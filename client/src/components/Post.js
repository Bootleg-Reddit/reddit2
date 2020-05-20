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
                <h5 className="card-title"><a href="/post/1" style={{textDecoration:"none", color:"black"}}>Card title</a></h5>
                <p className="card-text mb-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                
                {/* <span>
                    <a href="#" class="card-link">0 Comment</a>
                    <p>jancuk</p>
                </span> */}
                <div>
                    <a href="/post/1" className="mr-2">0 Comment</a>
                    posted by <span className="mr-2"><a href="/user/buigun>">buigun</a></span>
                    from <span><a href="/r/cat">/r/cat</a></span>
                </div>
            </div>
        </div>
    )
}