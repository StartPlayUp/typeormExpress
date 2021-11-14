import { validate } from 'class-validator';
import { returnComment } from '../types/InterfaceReturn';
import { User } from './../entity/User';


const createComment = async (): Promise<returnComment> => {
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

const findComments = async (): Promise<returnComment> => {
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