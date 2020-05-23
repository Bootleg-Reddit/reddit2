const initialState = {
    post: null,
    posts: []
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
            return {...state, post: action.payload}
        case 'SET_POSTS':
            return {...state, posts: action.payload}
        default:
            return state
    }
}

export default postReducer