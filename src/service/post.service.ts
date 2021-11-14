// import { validate } from 'class-validator';
// import { returnPost } from '../types/InterfaceReturn';
// import { IPost } from '../types/service/InterfacePost';
// import { Post } from './../entity/Post';


// const createPost = async (postData: IPost): Promise<returnPost> => {
//     const {
//         title,
//         content,
//         permision,
//         // delete,
//         // useComment,
//         // ipAddress,
//         // slug,
//         // user
//     } = postData;
//     try {
//         //     const post = Post.create({
//         //         title,
//         //         content,
//         //         permision,
//         //         delete,
//         //         useComment,
//         //         ipAddress,
//         //         slug,
//         //         user
//         //     });
//         //     // 추가해야 검사해줌
//         //     const errors = await validate(post)
//         //     if (errors.length > 0) throw errors
//         //     await Post.save()

//         return {
//             success: true,
//         }
//     } catch (err) {
//         return {
//             success: false,
//             error: "Something went wrong"
//         }
//     }
// }

// const deletePost = async () => {

// }

// const updatePost = async () => {

// }

// const getPost = async () => {

// }


// const getPosts = async (): Promise<returnPost> => {
//     try {

//         return {
//             success: true,
//         }
//     } catch (err) {
//         return {
//             success: false,
//             error: "Something went wrong"
//         }
//     }
// }


// export { createPost, updatePost, deletePost, getPost, getPosts }