import React from 'react'

export default function Post() {
    return (
        <>
        <div className="row" style={{margin: "5px"}}>
            <div className="card col-md-1">
                <button className="btn"><i className="far fa-caret-square-up"></i></button> 
                <span style={{textAlign:"center"}}>0</span>
                <button className="btn"><i className="far fa-caret-square-down"></i></button>
            </div>
            <div className="card col-md-11">
                <p className="card-text mb-2">
                Worked with a guy who punctured the main gas line to our shop three separate times. It was a construction company and he somehow was still my superintendent although he could have blown up the shop.
                </p>                
                <div>
                    Posted by <span className="mr-2"><a href="/user/buigun">buigun</a></span>
                </div>
            </div>
        </div>
        </>
    )
}