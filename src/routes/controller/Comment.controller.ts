import { Request, Response } from 'express';
import { createMemberComment, createNonMemberComment } from '../../service/Comment.service';

const sendMemberComment = async (req: Request, res: Response) => {
    const {
        content,
        ipAddress,
        postUuid,
        userUuid,
    } = req.body;
    const result = await createMemberComment({
        content,
        ipAddress,
        postUuid,
        userUuid,
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

const sendNonMemberComment = async (req: Request, res: Response) => {
    await console.log("여기냐?")
    const {
        content,
        ipAddress,
        postUuid,
        anonymouseId,
        password,
    } = req.body;
    console.log("여기냐?")
    const result = await createNonMemberComment({
        content,
        ipAddress,
        postUuid,
        anonymouseId,
        password
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        console.log("여기냐?")
        return res.status(500).json(result)
    }
}


export { sendMemberComment, sendNonMemberComment }
