import { validate } from 'class-validator';
import { returnUser } from '../types/InterfaceReturn';
import { ICreateUser } from '../types/service/InterfaceUser';
import { User } from './../entity/User';





const createUser = async (userData: ICreateUser): Promise<returnUser> => {
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
