import { combineReducers } from 'redux'
import { PostsReducer } from './reducers/postsReducer'

export default combineReducers({
  posts: PostsReducer,
})
