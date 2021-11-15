import { Thumb } from './Thumb';
import { Comment } from './Comment';
import { IsEmail, IsEnum, Length } from "class-validator";
import { Entity, Column, OneToMany } from "typeorm";
import { Model } from './Models/Model'
import { Post } from './Post'


@Entity()
export class User extends Model {
    @Column({ unique: true })
    @Length(5, 30)
    id: string;

    @Column({ unique: true })
    @Length(5, 30)
    nickname: string;

    @Column({ unique: true })
    @Length(1, 255)
    @IsEmail()
    email: string;

    @Column({ default: "asdfqwer12" })
    @Length(0, 20)
    password: string;

    @Column({
        type: 'enum',
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    })
    @IsEnum(['user', 'admin', 'superadmin'])
    role: string;

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]

    @OneToMany(() => Comment, comment => comment.user_nickname)
    commentsForNickname: Comment[]

    @OneToMany(() => Post, post => post.user)
    posts: Post[]

    @OneToMany(() => Thumb, thumb => thumb.user)
    thumbs: Thumb[]


    toJSON() {
        return { ...this, id: undefined, index: undefined, password: undefined }
    }
}
