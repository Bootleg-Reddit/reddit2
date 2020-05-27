import React, {useEffect} from 'react'
import Post from '../components/Post'
import SideNav from '../components/SideNav'
import { useSelector, useDispatch} from "react-redux";
import { getAllPostsBySubreddit } from "../store/actions/postAction";
import Loading from '../components/Loading'
import Nothing from '../components/Nothing'
import {useRouteMatch} from "react-router-dom";


export default function Home() {
    const dispatch = useDispatch();

    // const home = 'http://localhost:3000/'
    // const url2 = window.location.href;
    // const subpath = 'http://localhost:3000/r/'
    // let current_subreddit = url2.replace(subpath, '')
    const {url} = useRouteMatch();
    let temp2 = url.split('/')
    console.log(temp2)
    const current_subreddit = temp2[2]

    let posts = useSelector((state)=> state.postReducer.posts);
    let loadingPosts = useSelector((state)=> state.postReducer.loadingPosts);
    useEffect(()=>{
        console.log(current_subreddit)
        dispatch(getAllPostsBySubreddit(current_subreddit));
    }, [])
    return (
        <>
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>{current_subreddit}</h3>
        </div>
        <div className="row m-4 mt-2">
            <div className="col-md-9 mt-3">
            { loadingPosts &&
                <Loading/>
            }
            { !loadingPosts &&
                <>
                { posts.length > 0 &&
                <>
                {posts.map((post, idx)=> {
                    return (
                        <div key={idx}>
                            <Post
                            post={post}
                            />
                        </div>
                    )
                })}
                </>
                }
                { posts.length == 0 &&
                    <Nothing/>
                }
                </>
            }
            </div>
            <div className="col-md-3 mt-3">
                <SideNav/>
            </div>
        </div>
        </>
    )
}