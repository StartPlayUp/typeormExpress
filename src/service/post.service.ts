import { getRepository } from 'typeorm';
import { Thumb } from './../entity/Thumb';
import { User } from './../entity/User';
import { validate } from 'class-validator';
import { returnGetPostLikeIt, returnPost, returnPostLikeIt } from '../types/InterfaceReturn';
import { IPost, ILikeIt } from '../types/service/InterfacePost';
import { Post } from './../entity/Post';



const likeItPost = async (likeItData: ILikeIt): Promise<returnPostLikeIt> => {
    try {
        const { postUuid, userUuid, likeIt } = likeItData
        const post = await Post.findOneOrFail({ uuid: postUuid })
        const user = await User.findOneOrFail({ uuid: userUuid })
        const thumbFindOne = await Thumb.findOne({ post, user })
        let message = ""
        if (thumbFindOne) {
            thumbFindOne.remove()
        }
        else {
            const thumb = Thumb.create({
                post,
                user,
                likeIt: true
            })
            const errors = await validate(thumb)
            if (errors.length > 0) throw errors
            await thumb.save()
        }
        return {
            success: true,
            message
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const getLikeItPost = async (likeItData: any): Promise<returnGetPostLikeIt> => {
    try {
        const { postUuid } = likeItData
        const post = await Post.findOneOrFail({ uuid: postUuid })
        const thumb = await getRepository(Thumb)
            .createQueryBuilder("thumb")
            .select("SUM(thumb.likeIt)", "likeItCount")
            .addSelect("count(*)", "countAll")
            .where("thumb.postIndex = :postIndex", { postIndex: post.index })
            .getRawOne();
        console.log(thumb)
        let likeItCount = 0
        let countAll = 0
        if (thumb.sum !== null) {
            likeItCount = parseInt(thumb.likeItCount)
            countAll = parseInt(thumb.countAll)
        }
        return {
            success: true,
            likeItCount,
            countAll
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}




const createPost = async (postData: IPost): Promise<returnPost> => {
    const {
        title,
        content,
        ipAddress,
        userUuid,
    } = postData;
    console.log(postData)
    try {
        const user = await User.findOneOrFail({ uuid: userUuid })
        console.log(user)
        const post = Post.create({ title, content, ipAddress, user });
        const errors = await validate(post)
        if (errors.length > 0) throw errors
        await post.save()
        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

const deletePost = async () => {

}

const updatePost = async () => {

}

const getPost = async () => {

}


const getPosts = async (): Promise<returnPost> => {
    try {

        return {
            success: true,
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}


export {
    createPost,
    updatePost,
    deletePost,
    getPost,
    getPosts,
    likeItPost,
    getLikeItPost,
}