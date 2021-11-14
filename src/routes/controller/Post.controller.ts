import { Request, Response } from 'express';
import { createPost } from '../../service/post.service';

const sendPost = async (req: Request, res: Response) => {
    const { title, content, ipAddress, userUuid } = req.body;
    console.log(title)
    const result = await createPost({
        title, content, ipAddress, userUuid,
    });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

export { sendPost }
