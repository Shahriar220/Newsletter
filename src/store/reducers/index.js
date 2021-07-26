import {combineReducers} from 'redux'
import posts from './posts_reducers'
import user from './users_reducers'

const appReducers=combineReducers({
    posts,
    user
})
export default appReducers