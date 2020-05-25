const initialState = {
    token: null,
    username: null,
    email: null,
    isLoggedIn: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state,
                isLoggedIn: true,
                token: action.payload.token,
                email: action.payload.email,
                username: action.payload.username
            }
        case 'LOGOUT':
            return {...state, 
                isLoggedIn: false,
                token: null,
                email: null,
                username: null
            }
        case 'CHECK_TOKEN':
            return state
        case 'SET_TOKEN': 
            return {...state, token: action.payload}
        case 'SET_EMAIL': 
            return {...state, email: action.payload}
        case 'SET_USERNAME': 
            return {...state, username: action.payload}
        case 'SET_ISLOGGEDIN': 
            return {...state, isLoggedIn: action.payload}
        default:
            return state
    }
}

export default userReducer