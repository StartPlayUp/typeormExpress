import { Request, Response } from 'express';
import { createUser } from '../../service/User.service';

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

export { register }
