import swal from 'sweetalert'
import axios from 'axios'

const url = 'https://justanotherredditclone.herokuapp.com'
export function login(email,password) {
    return (dispatch) => {
        axios({
            url: url + '/users/login',
            method: 'post',
            data: {
                email,
                password
            }
        })
        .then(response => {
            localStorage.setItem('reddit_token', response.data.token)
            localStorage.setItem('reddit_email', response.data.email)
            localStorage.setItem('reddit_username', response.data.username)
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function logout() {
    localStorage.clear();
    return {
        type: 'LOGOUT',
        payload: null
    }
}

export function checkToken() {
    return {
        type: 'CHECK_TOKEN'
    }
}

export const setToken = (value) => {
    return {
        type : 'SET_TOKEN',
        payload : value
    }
}

export const setUsername = (value) => {
    return {
        type : 'SET_USERNAME',
        payload : value
    }
}

export const setEmail = (value) => {
    return {
        type : 'SET_EMAIL',
        payload : value
    }
}

export const setIsLoggedIn = (value) => {
    return {
        type : 'SET_ISLOGGEDIN',
        payload : value
    }
}


export function signUp(email,username,password) {
    return (dispatch) => {
        axios({
            url: url + '/users/register',
            method: 'post',
            data: {
                email,
                username,
                password
            }
        })
        .then(success=>{
            if(success) {
                return axios({
                    url: url + '/users/login',
                    method: 'post',
                    data: {
                        email,
                        password
                    }
                })
            }
        })
        .then(response=>{
            localStorage.setItem('reddit_token', response.data.token)
            localStorage.setItem('reddit_email', response.data.email)
            localStorage.setItem('reddit_username', response.data.username)

            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}