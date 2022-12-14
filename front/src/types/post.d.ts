export interface IPost {
  id: nubmer
  author: { name: string }
  authorId: number
  description: string
  this: string
  thisImagePath?: string
  that: string
  thatImagePath?: string
  title: string
  createdAt: Date
  updatedAt: Date
  comments: IComment[]
  thisCount: number
  thatCount: number
  _count: { comments: number; likes: number; voters: number; ReComment: number }
}
