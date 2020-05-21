import swal from 'sweetalert'
import axios from 'axios'

export function login(email,password) {
    return (dispatch) => {
        axios({
            url: 'http://localhost:3000/users/login',
            method: 'post',
            data: {
                email,
                password
            }
        })
        .then(response => {
            dispatch({
                type: 'LOGIN',
                payload: response.data.token
            })
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function logout() {
    return {
        type: 'LOGOUT',
        payload: ""
    }
}

export function checkToken() {
    return {
        type: 'CHECK_TOKEN'
    }
}

export function signUp(email,username,password) {
    return (dispatch) => {
        axios({
            url: 'http://localhost:3000/users/register',
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
                    url: 'http://localhost:3000/users/login',
                    method: 'post',
                    data: {
                        email,
                        password
                    }
                })
            }
        })
        .then(response=>{
            dispatch({
                type: 'SIGN_UP',
                payload: response.data.token
            })
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}