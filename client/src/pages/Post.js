import React from 'react'
import Comment from '../components/Comment'
import CompletePost from '../components/CompletePost'
import SideNav from '../components/SideNav'
import {useParams} from 'react-router-dom';

export default function Home() {
    const {id} = useParams();
    console.log(id)
    const home = 'http://localhost:3000/'
    const url = window.location.href;
    const path = 'http://localhost:3000/r/'
    let temp = url.replace(path, '')
    let temp2 = temp.split('/')
    const current_subreddit = temp2[0]

    return (
        <>
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>{current_subreddit}</h3>
        </div>
        <div className="row m-4 mt-2">
            <div className="col-md-9 mt-3">
                <CompletePost/>
                <br/>
                <h1>Comments</h1>
                <form>
                    <textarea style={{"margin-bottom": "10px"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
            <div className="col-md-3 mt-3">
                <SideNav />
            </div>
        </div>
        </>
    )
}