import * as types from '../actions/actionTypes'
import { AnyAction } from 'redux'
import { State } from '../store'

const initialState: State = {
  posts: [],
  post: {},
  loading: false
}

const handlers = {
  [types.SET_LOADING]: (state: State) => ({ ...state, loading: true }),
  [types.GET_ALL_POSTS]: (state: State, action: AnyAction) => ({ ...state, posts: action.payload, loading: false}),
  DEFAULT: (state: State) => state,
}

export const PostsReducer = (state: State = initialState, action: AnyAction) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
