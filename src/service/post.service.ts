import { validate } from 'class-validator';
import { returnApi } from '../types/InterfaceService';
import { User } from './../entity/User';


const createPost = async (): Promise<returnApi> => {
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

const deletePost = async () => {

}

const updatePost = async () => {

}

const getPost = async () => {

}


const getPosts = async (): Promise<returnApi> => {
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


export { createPost, updatePost, deletePost, getPost, getPosts }