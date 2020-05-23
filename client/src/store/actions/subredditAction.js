import swal from 'sweetalert'
import axios from 'axios'

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


export const setSubreddits = (value) => {
    return {
        type : 'SET_SUBREDDITS',
        payload : value
    }
}
