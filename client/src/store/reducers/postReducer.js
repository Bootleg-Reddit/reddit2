const initialState = {
    post: null,
    posts: [],
    comments: []
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
            return {...state, post: action.payload}
        case 'SET_POSTS':
            return {...state, posts: action.payload}
        case 'SET_COMMENTS':
            return {...state, comments: action.payload}
        default:
            return state
    }
}

export default postReducer