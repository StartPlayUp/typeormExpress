import { Request, Response } from 'express';
import {
    createMemberComment,
    createNonMemberComment,
    getCommentsFromPostUuid
} from '../../service/Comment.service';

const sendMemberComment = async (req: Request, res: Response) => {
    const {
        content,
        ipAddress,
        postUuid,
        userUuid,
        parentUuid,
    } = req.body;
    const result = await createMemberComment({
        content,
        ipAddress,
        postUuid,
        userUuid,
        parentUuid,
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const sendNonMemberComment = async (req: Request, res: Response) => {
    const {
        content,
        ipAddress,
        postUuid,
        parentUuid,
        anonymouseId,
        password,
    } = req.body;
    const result = await createNonMemberComment({
        content,
        ipAddress,
        postUuid,
        anonymouseId,
        password,
        parentUuid
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


const getComments = async (req: Request, res: Response) => {
    const postUuid = req.query.postUuid;
    const result = await getCommentsFromPostUuid({ postUuid });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


export { sendMemberComment, sendNonMemberComment, getComments }
