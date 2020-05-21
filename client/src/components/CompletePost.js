import React from 'react'

export default function Post() {
    return (
        <div className="row">
            <div className="card col-md-1">
                <button className="btn"><i className="far fa-caret-square-up"></i></button> 
                <span style={{textAlign:"center"}}>0</span>
                <button className="btn"><i className="far fa-caret-square-down"></i></button>
            </div>
            <div className="card col-md-11" >
                <h5 className="card-title"><a href="/r/cat/1" style={{textDecoration:"none", color:"black"}}>What is the worst thing that you've seen a coworker do and still avoid being fired?</a></h5>
                <p className="card-text mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
                </p>                
                <div>
                    Posted by <span className="mr-2"><a href="/user/buigun">buigun</a></span>
                </div>
            </div>
        </div>
    )
}