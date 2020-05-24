import React from 'react';
function Loading (){
    return (
        <div style={{height: "200px"}} className="loadingPage"> 
            <div style={{marginLeft: "50%", marginTop: "5%"}} className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
export default Loading;