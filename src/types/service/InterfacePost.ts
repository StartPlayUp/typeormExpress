import { role } from '../enum/index'
interface IPost {
    title: string,
    content: string,
    ipAddress: string
    userUuid: string,
    permision?: role,
    useComment?: boolean,
    delete?: boolean,
}


interface ILikeIt {
    postUuid: string,
    userUuid: string,
    likeIt: boolean
}

export { IPost, ILikeIt }