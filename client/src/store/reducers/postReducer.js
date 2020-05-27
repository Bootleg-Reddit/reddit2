const initialState = {
    post: null,
    posts: [],
    comments: [],
    loadingPosts: false,
    loadingPost: false,
    loadingComments: false
}

function postReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_POST':
            return {...state, loadingPost: false, post: action.payload}
        case 'SET_POSTS':
            return {...state, loadingPosts:false, posts: action.payload}
        case 'SET_COMMENTS':
            return {...state, loadingComments:false, comments: action.payload}
        case 'SET_LOADINGPOSTS':
            return {...state, loadingPosts: action.payload}
        case 'SET_LOADINGPOST':
            return {...state, loadingPost: action.payload}
        case 'SET_LOADINGCOMMENTS':
            return {...state, loadingComments: action.payload}

        default:
            return state
    }
}

export default postReducer