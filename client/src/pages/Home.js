import React from 'react'
import Post from '../components/Post'
import SideNav from '../components/SideNav'

export default function Home() {
    return (
        <>
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>All</h3>
        </div>
        <div className="row m-4 mt-2">
            <div className="col-md-9 mt-3">
                <Post/>
            </div>
            <div className="col-md-3 mt-3">
                <SideNav />
            </div>
        </div>
        </>
    )
}