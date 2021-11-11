import { CommentModel } from './Models/CommentModel';
import { Entity, Column, ManyToMany, ManyToOne } from "typeorm";
import { Post } from './Post';

@Entity()
export class NonMemberComment extends CommentModel {
    @Column()
    content!: string;

    @Column()
    password!: string;

    @Column('boolean', { default: false })
    deleted!: boolean;

    @ManyToOne(() => Post, post => post.nonMemberComments)
    post: Post;
}