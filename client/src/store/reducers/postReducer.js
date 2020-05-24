const initialState = {
    post: null,
    posts: [],
    comments: [],
    loadingPosts: false
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
            return {...state, post: action.payload}
        case 'SET_POSTS':
            return {...state, loadingPosts:false, posts: action.payload}
        case 'SET_COMMENTS':
            return {...state, comments: action.payload}
        case 'SET_LOADINGPOSTS':
            return {...state, loadingPosts: action.payload}
        default:
            return state
    }
}

export default postReducer