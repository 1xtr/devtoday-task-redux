import * as types from '../types'

const handlers = {
  [types.SET_LOADING]: (state: {}) => ({ ...state, loading: true }),
  [types.GET_ALL_POSTS]: (state: {},  {payload}: {payload: []}) => ({ ...state, posts: payload, loading: false}),
  DEFAULT: (state: {}) => state,
}

export const PostsReducer = (state: {}, action: any) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
