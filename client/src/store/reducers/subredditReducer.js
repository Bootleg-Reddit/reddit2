const initialState = {
    subreddits: [],
    subredditsLoading: false
}

function subredditReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SUBREDDITS':
            return {...state, subredditsLoading:false, subreddits: action.payload}
        case 'SET_SUBREDDITSLOADING':
            return {...state, subredditsLoading: action.payload}
        default:
            return state
    }
}

export default subredditReducer