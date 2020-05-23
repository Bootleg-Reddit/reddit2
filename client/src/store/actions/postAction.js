import swal from 'sweetalert'
import axios from 'axios'

const url = 'http://localhost:3001'

export function getAllPosts(){
    return (dispatch) => {
        axios({
            url: url + '/posts',
            method: 'get'
        })
        .then(response => {
            dispatch(setPosts(response.data.posts))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function getAllPostsBySubreddit(SubredditID){
    return (dispatch) => {
        axios({
            url: url + '/posts/' + SubredditID,
            method: 'get',
        })
        .then(response => {
            dispatch(setPosts(response.data.posts))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function getPostById(id){
    return (dispatch) => {
        axios({
            url: url + '/posts/' + id,
            method: 'get',
        })
        .then(response => {
            dispatch(setPosts(response.data.posts))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export const setPosts = (value) => {
    return {
        type : 'SET_POSTS',
        payload : value
    }
}

export const setPost = (value) => {
    return {
        type : 'SET_POST',
        payload : value
    }
}

