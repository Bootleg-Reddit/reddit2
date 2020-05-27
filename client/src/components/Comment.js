import React from 'react'

export default function Post(props) {
    return (
        <>
        <div className="row" style={{margin: "5px"}}>
            <div className="card col-md-11 card-body d-flex flex-column">
                <p className="card-text mb-2">
                {props.comment.content}

                </p>     
                <div className="align-self-bottom">
                    Posted by <span className="mr-2">{props.comment.User.username}</span>
                </div>
            </div>
        </div>
        </>
    )
}