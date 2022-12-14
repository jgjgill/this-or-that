import axios from 'axios'
import { IImage } from 'types/image'
import { IPost } from 'types/post'
import { IUser } from 'types/user'

const url = process.env.REACT_APP_API_URL

export interface INewPostVote {
  postId: number
  assignedBy: 'this' | 'that'
}

export interface INewLike {
  postId: number
}

export interface IMyInfo {
  userId?: number
  isLiked: boolean
  isVoted: boolean
  voteContent?: { assignedBy: 'this' | 'that' }
  commentIsLikedArray: { isLiked: boolean }[]
}

axios.defaults.withCredentials = true

// export const getUser = (userId: number): Promise<IUser> => axios.get(`${url}/user/${userId}`).then((res) => res.data)

export const getLogout = () => axios.get(`${url}/auth/google/logout`).then((res) => res.data)

export const getAuthStatus = () => axios.get(`${url}/auth/google/status`).then((res) => res.data)

export const getMyInfo = (): Promise<IUser> => axios.get(`${url}/user/myInfo`).then((res) => res.data)

export const getProfileInfo = (): Promise<any> => axios.get(`${url}/user/profileInfo`).then((res) => res.data)

export const getMyPostInfo = (postId: string): Promise<IMyInfo> =>
  axios.get(`${url}/user/me?postId=${postId}`).then((res) => res.data)

export const getMyReCommentInfo = (commentId: number): Promise<any> =>
  axios.get(`${url}/user/me/recomment?commentId=${commentId}`).then((res) => res.data)

export const getPosts = (skip: number): Promise<IPost[]> =>
  axios.get(`${url}/post?skip=${skip}`).then((res) => res.data)

export const getPost = (postId: string): Promise<IPost> => axios.get(`${url}/post/${postId}`).then((res) => res.data)

export const getLastImage = (): Promise<IImage> => axios.get(`${url}/image/-1`).then((res) => res.data)

export const postNewPost = (newPost: IPost) => axios.post(`${url}/post`, newPost)

export const postNewThisImage = (newPost: FormData) => axios.post(`${url}/image/this_image`, newPost)

export const postNewThatImage = (newImage: FormData) => axios.post(`${url}/image/that_image`, newImage)

export const postNewPostVote = (newPostVote: INewPostVote) => axios.post(`${url}/vote`, newPostVote)

export const postNewPostLike = (newPostLike: INewLike) => axios.post(`${url}/like`, newPostLike)

export const postNewNickname = (newPostName: { name: string }) => axios.post(`${url}/user/name`, newPostName)

export const postNewComment = (commentData: { comment: string }, postId: number) =>
  axios.post(`${url}/comment?postId=${postId}`, commentData)

export const postNewReComment = (newReComment: string, postId: string, commentId: number) =>
  axios.post(`${url}/recomment?postId=${postId}&commentId=${commentId}`, newReComment)

export const postNewCommentLike = (commentId: number) => axios.post(`${url}/like/comment?commentId=${commentId}`)

export const postNewReCommentLike = (reCommentId: number) =>
  axios.post(`${url}/like/recomment?reCommentId=${reCommentId}`)

export const deletePost = (postId: number) => axios.delete(`${url}/post/${postId}`)

export const deleteComment = (commentId: number) => axios.delete(`${url}/comment/${commentId}`)

export const deleteReComment = (ReCommentId: number) => axios.delete(`${url}/ReComment/${ReCommentId}`)
