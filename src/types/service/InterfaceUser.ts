import { role } from "../enum";


interface ICreateUser {
    id: string,
    nickname: string,
    email: string,
    password: string,
    role?: role | undefined
}

export { ICreateUser }