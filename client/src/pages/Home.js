import React, {useEffect} from 'react'
import Post from '../components/Post'
import SideNav from '../components/SideNav'
import { useSelector, useDispatch} from "react-redux";
import { getAllPosts } from "../store/actions/postAction";
import Loading from '../components/Loading'
import Nothing from '../components/Nothing'

export default function Home() {
    const dispatch = useDispatch();
    let posts = useSelector((state)=> state.postReducer.posts);
    let loadingPosts = useSelector((state)=> state.postReducer.loadingPosts);
    useEffect(()=>{
        dispatch(getAllPosts());
    }, [])
    return (
        <>
        
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>All</h3>
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
                    {
                        posts.length < 1 &&
                        <Nothing/>

                    }
                </>
            }
            </div>


            
            <div className="col-md-3 mt-3">
                <SideNav />
            </div>
        </div>
        </>
    )
}