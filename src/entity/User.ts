import { MemberComment } from './MemberComment';
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

    @OneToMany(() => MemberComment, memberComment => memberComment.user)
    memberComments: MemberComment[]

    @OneToMany(() => Post, post => post.user)
    posts: Post[]
}
