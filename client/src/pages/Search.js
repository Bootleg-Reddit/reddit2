import React, {useEffect} from 'react'
import Post from '../components/Post'
import queryString from 'query-string';

import SideNav from '../components/SideNav'
import { useSelector, useDispatch} from "react-redux";
import { searchPosts } from "../store/actions/postAction";
import Loading from '../components/Loading'

const Search = ({ location }) => {
    const dispatch = useDispatch();
    let posts = useSelector((state)=> state.postReducer.posts);
    let loadingPosts = useSelector((state)=> state.postReducer.loadingPosts);
    useEffect(()=>{
        const { query } = queryString.parse(location.search);
        dispatch(searchPosts(query));
    }, [location.search])
    return (
        <>    
        <div className="col-md-12" style={{background: "linear-gradient(to right, DeepSkyBlue , blue)", height:"120px", padding:"40px"}}>
            <h3 style={{textAlign:"center",color:"white"}}>Search Results</h3>
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
                        <h1>Sorry, we cannot find anything that matches your query</h1>
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
export default Search;
