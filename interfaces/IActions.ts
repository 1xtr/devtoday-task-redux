import { ISinglePost } from './IPosts'

export interface IActions {
  SET_LOADING: string,
  GET_ALL_POSTS: string,
  GET_POST_BY_ID: string,
  CREATE_POST: string,
}

export interface ISetLoading {
  type: IActions['SET_LOADING']
}

export interface IGetAllPostsSuccess {
  type: IActions['GET_ALL_POSTS']
  payload: ISinglePost[]
}

export interface IGetPostById {
  type: IActions['GET_POST_BY_ID']
  loading: boolean
  payload: ISinglePost
}

export interface ICreatePost {
  type: IActions['CREATE_POST']
}
