const initialState = {
    post: null,
    posts: []
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
            return {...state, token: action.payload}
        case 'SET_POSTS':
            return {...state, token: action.payload}
        default:
            return state
    }
}

export default postReducer