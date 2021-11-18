import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Post } from './entity/Post';
import routes from "./routes/index";
import cookieParser from "cookie-parser";
import morgan from 'morgan';
import express, { Request, Response } from 'express'
import { validate } from "class-validator";
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(morgan())
app.use('/api', routes)


// // CREATE
// app.post('/users', async (req: Request, res: Response) => {
//     const { id, nickname, email, role } = req.body;
//     try {
//         const user = User.create({ id, nickname, email, role });

//         // 추가해야 검사해줌
//         const errors = await validate(user)
//         if (errors.length > 0) throw errors

//         await user.save()
//         return res.status(201).json(user);
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "Something went wrong" })
//     }
// })
// // READ
// app.get('/users', async (_: Request, res: Response) => {
//     try {
//         // const users = await User.find({ relations: ['posts'] })
//         const users = await User.find()
//         return res.status(201).json(users);
//     } catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "Something went wrong" })
//     }
// })

// // UPDATE
// app.put('/users/:uuid', async (req: Request, res: Response) => {
//     const uuid = req.params.uuid
//     const { name, email, role } = req.body
//     try {
//         const user = await User.findOneOrFail({ uuid });
//         user.name = name || user.name
//         user.email = email || user.email
//         user.role = role || user.role
//         await user.save();
//         return res.status(201).json(user);
//     } catch (err) {
//         return res.status(500).json({ error: "Something went wrong" })
//         console.log(err);
//     }
// })

// // DELETE
// app.delete('/users/:uuid', async (req: Request, res: Response) => {
//     const uuid = req.params.uuid
//     try {
//         const user = await User.findOneOrFail({ uuid });
//         await user.remove();
//         return res.status(204).json({ message: "User deleted successfully" });
//     } catch (err) {
//         return res.status(500).json({ error: "Something went wrong" })
//         console.log(err);
//     }
// })

// // create a post
// app.post('/posts', async (req: Request, res: Response) => {
//     const { userUuid, title, body } = req.body

//     try {
//         const user = await User.findOneOrFail({ uuid: userUuid })
//         const post = new Post({ title, body, user });

//         const errors = await validate(user)
//         if (errors.length > 0) throw errors

//         await post.save()
//         await res.status(201).json(post)

//     }
//     catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: err })
//     }
// })

// // read a post
// app.get('/posts', async (req: Request, res: Response) => {
//     try {
//         const posts = await Post.find({ relations: ['user'] })
//         res.status(201).json(posts)
//     }
//     catch (err) {
//         console.log(err)
//         return res.status(500).json({ error: "Something went wrong" })
//     }
// })

createConnection().then(async connection => {

    app.listen(5000, () => console.log('Server up at http://localhost:5000'))
    /* 
        const user = new User()
        user.nickname = "JSC"
        user.email = "gbs04087@gmail.com"
        user.role = 'admin'
        user.id = 'adminasdf'
    
        await user.save()
        console.log("create success") */

}).catch(error => console.log(error));




    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");