import swal from 'sweetalert'
import axios from 'axios'
import store from '../index';

const url = 'http://localhost:3001'

export function getSubreddits(){
    return (dispatch) => {
        axios({
            url: url + '/subreddit',
            method: 'get'
        })
        .then(response => {
            console.log(response.data.subreddits)
            dispatch(setSubreddits(response.data.subreddits))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function createSubreddit(data){
    return (dispatch) => {
        axios({
            url: url + '/subreddit',
            method: 'post',
            data: data,
            headers: {
                token: localStorage.getItem('reddit_token')
            }
        })
        .then(response => {
            console.log(response.data.subreddit)
            let subreddits = store.getState().subredditReducer.subreddits;
            subreddits.push(response.data.subreddit)
            dispatch(setSubreddits(subreddits))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })

    }
}


export const setSubreddits = (value) => {
    return {
        type : 'SET_SUBREDDITS',
        payload : value
    }
}
