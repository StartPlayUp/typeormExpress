import { validate } from 'class-validator';
import { returnUser } from '../types/InterfaceReturn';
import { ICreateUser, IReadUser } from '../types/service/InterfaceUser';
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

const deleteUser = async (userData: ICreateUser): Promise<returnUser> => {
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

const updateUser = async (userData: ICreateUser): Promise<returnUser> => {
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

const readUser = async (userData: IReadUser): Promise<returnUser> => {
    const { nickname } = userData;
    try {
        const user = await User.findOneOrFail({ nickname });
        // 추가해야 검사해줌
        return {
            success: true,
            user
        }
    } catch (err) {
        return {
            success: false,
            error: "Something went wrong"
        }
    }
}


export { createUser, readUser }
