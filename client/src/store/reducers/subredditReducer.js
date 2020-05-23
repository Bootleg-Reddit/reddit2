const initialState = {
    subreddits: []
}

function subredditReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SUBREDDITS':
            return {...state, subreddits: action.payload}
        default:
            return state
    }
}

export default subredditReducer