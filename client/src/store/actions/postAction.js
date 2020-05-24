import swal from 'sweetalert'
import axios from 'axios'
import store from '../index';

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

export function getComments(id){
    return (dispatch) => {
        axios({
            url: url + '/comments/' + id,
            method: 'get'
        })
        .then(response => {
            console.log(response.data)
            dispatch({
                type: 'SET_COMMENTS',
                payload: response.data
            });
        })
        .catch(err=>{
            swal("Error!",'Cannot Retrieve Posts',"error")
        })
    }
}

export function vote (id, vote){
    console.log('masuk vote')
    return (dispatch)=> {
        axios({
            url: url + '/posts/vote/' + id,
            method: 'post',
            data: {
                vote: vote
            },
            headers: {
                token: localStorage.getItem('reddit_token')
            }
        })
        .then(response=>{
            console.log(response)
        })
        .catch(console.log)
    }
}

export function removeVote(id){
    return (dispatch)=> {
        axios({
            url: url + '/posts/vote/' + id,
            method: 'delete',
            headers: {
                token: localStorage.getItem('reddit_token')
            }
        })
        .then(response=>{
            console.log(response)
        })
        .catch(console.log)
    }

}

export function createComment(id, data){
    console.log(data)
    console.log(id)
    console.log(localStorage.getItem('reddit_token'))
    return(dispatch) => {
        axios({
            url: url + '/comments/' + id,
            method: 'post',
            data: data,
            headers: {
                token: localStorage.getItem('reddit_token')
            }
        })
        .then(response => {
            console.log(response)
            // let comments = store.getState().postReducer.comments;
            // comments.push(response.data)
            console.log('==============')
            console.log(response.data)
            console.log('==============')

            dispatch({
                type: 'SET_COMMENTS',
                payload: response.data
            });
        })
        .catch(err=>{
            swal("Error!",err,"error")
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
    console.log('we in')
    return (dispatch) => {
        axios({
            url: url + '/posts/' + id,
            method: 'get'
        })
        .then(response => {
            console.log(response.data)
            dispatch(setPost(response.data))
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

export const setComments = (value) => {
    return {
        type : 'SET_COMMENTS',
        payload : value
    }
}


