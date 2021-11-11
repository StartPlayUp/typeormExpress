import { validate } from 'class-validator';
import { returnApi } from '../types/InterfaceService';
import { User } from './../entity/User';


const createComment = async (): Promise<returnApi> => {
    try {
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

const deleteComment = async () => {

}

const findComments = async (): Promise<returnApi> => {
    try {

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


export { createComment, deleteComment, findComments }