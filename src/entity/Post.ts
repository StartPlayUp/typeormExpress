import { IsEnum, IsIP, IsBoolean, MinLength, Length } from "class-validator";
import { Entity, Column, ManyToMany, ManyToOne, OneToMany, AfterInsert } from "typeorm";
import { MemberComment } from "./MemberComment";
import { NonMemberComment } from "./NonMemberComment";

import { Model } from './Models/Model'
import { User } from './User'

@Entity()
export class Post extends Model {
    @Column()
    @Length(1, 255)
    title: string;

    @Column()
    @Length(1, 255)
    content: string;

    @Column({
        type: 'enum',
        enum: ['user', 'admin', 'superadmin'],
        default: 'user'
    })
    permision: string;

    @Column({
        nullable: false,
        default: false
    })
    delete: boolean;

    @Column({
        nullable: false,
        default: true
    })
    useComment: boolean;

    @Column()
    @IsIP()
    ipAddress: string;

    @Column({
        nullable: true
    })
    slug: string;

    @AfterInsert()
    createSlug() {
        this.title
    }

    @ManyToOne(() => User, post => post.posts)
    user: User

    @OneToMany(() => MemberComment, memberComment => memberComment.post)
    memberComments: MemberComment[]

    @OneToMany(() => NonMemberComment, nonMemberComment => nonMemberComment.post)
    nonMemberComments: NonMemberComment[]

}
