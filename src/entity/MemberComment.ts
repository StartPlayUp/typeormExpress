import { Entity, Column, ManyToOne } from "typeorm";
import { Post } from './Post';
import { User } from './User'
import { CommentModel } from './Models/CommentModel';


@Entity()
export class MemberComment extends CommentModel {
    @Column()
    content!: string;

    @Column('boolean', { default: false })
    deleted!: boolean;


    @ManyToOne(() => User, user => user.memberComments)
    user: User;


    @ManyToOne(() => Post, post => post.memberComments)
    post: Post;
}