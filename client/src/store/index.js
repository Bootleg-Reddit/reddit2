import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'
import subredditReducer from './reducers/subredditReducer'

import thunk from 'redux-thunk'

const reducers = combineReducers({ userReducer, postReducer, subredditReducer})
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
