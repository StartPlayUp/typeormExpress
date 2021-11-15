// import { CommentModel } from '../entity/Models/CommentModel';
// import { Entity, Column, ManyToMany, ManyToOne } from "typeorm";
// import { Post } from '../entity/Post';

// @Entity()
// export class NonMemberComment extends CommentModel {
//     @Column()
//     anonymouseId!: string;

//     @Column()
//     password!: string;

//     @ManyToOne(() => Post, post => post.nonMemberComments)
//     post: Post;
// }