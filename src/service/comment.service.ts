import { User } from './../entity/User';
import { Comment } from './../entity/Comment';
import { Post } from './../entity/Post';
import { validate } from 'class-validator';
import { returnComment } from '../types/InterfaceReturn';
import { IMemberComment, INonMemberComment } from '../types/service/InterfaceComment';
// import { INonMemberComment } from '../types/service/interfaceMemberComment';
import { getRepository, Connection, IsNull } from 'typeorm';


const createMemberComment = async (commentData: IMemberComment): Promise<returnComment> => {
    const {
        content,
        ipAddress,
        postUuid,
        userUuid,
        parentUuid,
    } = commentData;
    try {
        const postFromUuid = await Post.findOneOrFail({ uuid: postUuid })
        const userFromUuid = await User.findOneOrFail({ uuid: userUuid })
        let comment;
        if (parentUuid !== undefined) {
            const commentFromUuid = await Comment.findOneOrFail({ uuid: parentUuid })
            console.log(commentFromUuid)
            comment = Comment.create({
                content,
                ipAddress,
                post: postFromUuid,
                user: userFromUuid,
                isMember: true,
                parentComment: commentFromUuid
            });
        }
        else {
            comment = Comment.create({
                content,
                ipAddress,
                isMember: true,
                post: postFromUuid,
                user: userFromUuid,
            });
        }

        // 추가해야 검사해줌
        const errors = await validate(comment)
        if (errors.length > 0) throw errors
        await comment.save()
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
        parentUuid,
    } = commentData;
    console.log(commentData)
    try {
        const postFromUuid = await Post.findOneOrFail({ uuid: postUuid })
        let comment;
        if (parentUuid !== undefined) {
            const commentFromUuid = await Comment.findOneOrFail({ uuid: parentUuid })
            console.log(commentFromUuid)
            comment = Comment.create({
                content,
                ipAddress,
                post: postFromUuid,
                anonymouseId,
                password,
                parentComment: commentFromUuid
            });
        }
        else {
            comment = Comment.create({
                content,
                ipAddress,
                anonymouseId,
                password,
                post: postFromUuid,
            });
        }
        // 추가해야 검사해줌
        const errors = await validate(comment)
        if (errors.length > 0) throw errors
        await comment.save()
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
        // const comment = await Comment.find({
        //     select: ["uuid", "updatedAt", "content", "ipAddress"],
        //     relations: ["post"],
        //     where: {
        //         post: {
        //             uuid: postUuid
        //         }
        //     }
        // })
        const comment = await getRepository(Comment)
            .createQueryBuilder("comment")
            .where('comment.parentComment IS NULL')
            .andWhere("post.uuid = :uuid", { uuid: postUuid })
            // .select(["comment.uuid", "comment.updatedAt", "comment.content", "comment.ipAddress", "comment.isMember"])
            .leftJoin('comment.post', 'post')
            .leftJoin('comment.user', 'user')
            .addSelect('user.id')
            // .leftJoinAndSelect('comment.childComments', 'parentComment')
            .leftJoin('comment.childComments.user', 'user')

            // .leftJoin('comment.childComments.user', 'user')
            .printSql()
            .getRawMany();

        return {
            success: true,
            comment
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}

//  select: ["uuid", "updatedAt", "content", "parentComment", "ipAddress"],
//  relations: ["parentComment"],
//  where: {
//      postIndex: post.index
//      post: {
//          uuid: postUuid,
//      },
//  },

export { createMemberComment, createNonMemberComment, deleteComment, getCommentsFromPostUuid }