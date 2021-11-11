import { validate } from 'class-validator';
import { returnApi } from '../constants/api';
import { User } from './../entity/User';


interface createUserInterface {
    id: string,
    nickname: string,
    email: string,
    password: string,
    role?: roleEnum | undefined
}

enum roleEnum {
    'user',
    'admin',
    'superadmin'
}



const createUser = async (userData: createUserInterface): Promise<returnApi> => {
    const { id, nickname, email, password } = userData;
    try {
        const user = User.create({ id, nickname, email, password, role: 'user' });

        // 추가해야 검사해줌
        const errors = await validate(user)
        if (errors.length > 0) throw errors
        await user.save()
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


export { createUser }
