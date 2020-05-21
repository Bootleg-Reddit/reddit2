const initialState = {
    token: null,
    isLoggedIn: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, isLoggedIn: true, token: action.payload}
        case 'LOGOUT':
            return {...state, isLoggedIn: false, token: action.payload}
        case 'CHECK_TOKEN':
            return state
        case 'SET_TOKEN': 
            return {...state, token: action.payload}
        case 'SET_ISLOGGEDIN': 
            return {...state, isLoggedIn: action.payload}
        default:
            return state
    }
}

export default userReducer