import { createStore, EmptyObject, Store } from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { ISinglePost } from '../interfaces/IPosts'

export interface State {
  posts: ISinglePost[] | [],
  post: ISinglePost | EmptyObject,
  loading: boolean
}

const makeStore = () => createStore(
  rootReducer,
  composeWithDevTools()
)

export const wrapper = createWrapper<Store<State | EmptyObject>>(makeStore)
