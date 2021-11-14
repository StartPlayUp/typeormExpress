import { CommentModel } from './Models/CommentModel';
import { Entity, Column, ManyToMany, ManyToOne } from "typeorm";
import { Post } from './Post';

@Entity()
export class NonMemberComment extends CommentModel {
    @Column()
    password!: string;

    @ManyToOne(() => Post, post => post.nonMemberComments)
    post: Post;
}