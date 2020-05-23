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
            console.log(response.data.posts)
            dispatch({
                type: 'SET_POSTS',
                payload: response.data.posts
            });
        })
        .catch(err=>{
            swal("Error!",'Cannot Retrieve Posts',"error")
        })
    }
}

export function getAllPostsBySubreddit(SubredditName){
    return (dispatch) => {
        axios({
            url: url + '/posts/r/' + SubredditName,
            method: 'get',
        })
        .then(response => {
            console.log(response.data.posts)
            dispatch({
                type: 'SET_POSTS',
                payload: response.data.posts
            });
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function createPost(data){
    console.log('fridufbnrejfnrejkfnc erkjdn f')
    console.log(data)
    console.log('lalalalal erkjdn f')



    return (dispatch) => {
        axios({
            url: url + '/posts',
            method: 'post',
            data: data,
            headers: {
                token: localStorage.getItem('reddit_token')
            }
        })
        .then(response => {
            console.log(response.data.post)
            
            dispatch({
                type: 'SET_POST',
                payload: response.data.post
            });
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

