import { Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Post } from './Post';
import { User } from './User'
import { Model } from "./Models/Model";


@Entity()
export class Comment extends Model {
    @Column({
        nullable: false,
        type: 'longtext'
    })
    content!: string;

    @Column('boolean', {
        default: false
    })
    deleted!: boolean;

    @Column({
        nullable: false
    })
    ipAddress: string;

    @Column({
        nullable: true
    })
    anonymouseId?: string;

    @Column({
        nullable: true
    })
    password?: string;

    @Column({
        nullable: false,
        default: false
    })
    isMember: boolean;

    @ManyToOne(_ => Comment, comment => comment.childComments)
    parentComment!: Comment

    @OneToMany(_ => Comment, comment => comment.parentComment)
    childComments: Comment[]

    @ManyToOne(() => User, user => user.comments)
    user: User;

    @ManyToOne(() => User, user => user.commentsForNickname)
    @JoinColumn({ name: 'user_nickname', referencedColumnName: 'nickname' })
    user_nickname: User;


    @ManyToOne(() => Post, post => post.comments)
    post: Post;


    toJSON() {
        if (this.deleted) {
            return {
                ...this,
                content: "삭제된 글 입니다",
                password: undefined,
                test: this.user_nickname
            }
        }
        else {
            return {
                ...this,
                test: this.user_nickname,
                password: undefined
            }
        }
    }
}