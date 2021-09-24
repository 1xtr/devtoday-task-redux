import * as Actions from './actionTypes'
import axios from '../../utils/axios-posts'
import { ISinglePost } from '../../interfaces/IPosts'
import { IGetAllPostsSuccess, ISetLoading } from '../../interfaces/IActions'
import { Dispatch } from 'redux'

// type DispatchGetAllPosts = () => IPosts
// type DispatchSetLoading = (loading: ISetLoading) => ISetLoading

export function fetchAllPosts() {
  console.log('fetchAllPosts')
  return async (dispatch: Dispatch) => {
    dispatch(setLoading())
    try {
      const response = await axios.get('/posts')
      console.log(response.data)
      return dispatch(getAllPostsSuccess(response.data))
    } catch (e) {
      console.log(e)
    }
  }
}

export function setLoading(): ISetLoading {
  return {
    type: Actions.SET_LOADING,
  }
}

export function getAllPostsSuccess(posts: ISinglePost[]): IGetAllPostsSuccess {
  return {
    type: Actions.GET_ALL_POSTS,
    payload: posts,
  }
}
