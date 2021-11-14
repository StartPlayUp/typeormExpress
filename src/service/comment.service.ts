import { NonMemberComment } from './../entity/NonMemberComment';
import { User } from './../entity/User';
import { MemberComment } from './../entity/MemberComment';
import { Post } from './../entity/Post';
import { validate } from 'class-validator';
import { returnComment } from '../types/InterfaceReturn';
import { IMemberComment } from '../types/service/InterfaceMemberComment';
import { INonMemberComment } from '../types/service/interfaceMemberComment';
import { getRepository, Connection } from 'typeorm';


const createMemberComment = async (commentData: IMemberComment): Promise<returnComment> => {
    const {
        content,
        ipAddress,
        postUuid,
        userUuid,
        parentComment,
    } = commentData;
    try {
        const post = await Post.findOneOrFail({ uuid: postUuid })
        const user = await User.findOneOrFail({ uuid: userUuid })

        const memberComment = MemberComment.create({ content, ipAddress, post, user });
        // 추가해야 검사해줌
        const errors = await validate(post)
        if (errors.length > 0) throw errors
        await memberComment.save()
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

const createNonMemberComment = async (commentData: INonMemberComment): Promise<returnComment> => {
    const {
        content,
        ipAddress,
        postUuid,
        anonymouseId,
        password,
        parentComment,
    } = commentData;
    console.log(commentData)
    try {
        const post = await Post.findOneOrFail({ uuid: postUuid })

        const nonMemberComment = NonMemberComment.create({ content, ipAddress, anonymouseId, password, post });
        // 추가해야 검사해줌
        // const errors = await validate(post)
        // if (errors.length > 0) throw errors
        await nonMemberComment.save()
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


const deleteComment = async () => {

}

const getCommentsFromPostUuid = async ({ postUuid }: any): Promise<returnComment> => {
    try {
        const post = await Post.findOneOrFail({ uuid: postUuid })
        console.log(post.index)
        const memberComments = await MemberComment.find({
            // select: ["uuid", "updatedAt", "content", "parentComment", "ipAddress"],
            // relations: ["post"],
            where: {
                // postIndex: post.index
                // post: {
                //     uuid: postUuid,
                // },
            },
        })
        const nonMemberComments = await NonMemberComment.find()
        return {
            success: true,
            memberComments,
            nonMemberComments
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}


export { createMemberComment, createNonMemberComment, deleteComment, getCommentsFromPostUuid }