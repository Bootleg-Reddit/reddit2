const initialState = {
    token: null
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {...state, token: action.payload}
        case 'LOGOUT':
            return {...state, token: action.payload}
        case 'SIGN_UP':
            return {...state, token: action.payload}
        case 'CHECK_TOKEN':
            return state
        default:
            return state
    }
}

export default userReducer