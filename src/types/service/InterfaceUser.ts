import { role } from "../enum";


interface ICreateUser {
    id: string,
    nickname: string,
    email: string,
    password: string,
    emailToken: string,
    isVerified: boolean,
    role?: role
}


interface IReadUser {
    nickname: string
}

interface ILoginUser {
    id: string,
    password: string
}

export { ICreateUser, IReadUser, ILoginUser }