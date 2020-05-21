import {createStore, combineReducers, applyMiddleware} from 'redux'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({ userReducer })
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
