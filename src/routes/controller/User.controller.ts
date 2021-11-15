import { Request, Response } from 'express';
import { createUser, readUser } from '../../service/User.service';

const register = async (req: Request, res: Response) => {
    const { id, nickname, email, password } = req.body;
    const result = await createUser({ id, nickname, email, password });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


const deleteUser = async (req: Request, res: Response) => {
    const nickname = req.query.nickname as string;
    const result = await readUser({ nickname });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}


const getUser = async (req: Request, res: Response) => {
    const nickname = req.query.nickname as string;
    const result = await readUser({ nickname });
    if (result.success) {
        return res.status(201).json(result);
    }
    else {
        return res.status(500).json(result)
    }
}

export { register, getUser, deleteUser }
