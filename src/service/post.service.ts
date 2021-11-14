import { User } from './../entity/User';
import { validate } from 'class-validator';
import { returnPost } from '../types/InterfaceReturn';
import { IPost } from '../types/service/InterfacePost';
import { Post } from './../entity/Post';
import { print } from 'util';


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
        // 추가해야 검사해줌
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


export { createPost, updatePost, deletePost, getPost, getPosts }