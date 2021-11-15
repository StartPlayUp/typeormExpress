import { Post } from '../entity/Post';
import { Column, ManyToOne } from "typeorm";
import { Model } from "../entity/Models/Model";


export abstract class CommentModel extends Model {
    @Column({
        nullable: false,
        type: 'longtext'
    })
    content!: string;

    @Column('boolean', { default: false })
    deleted!: boolean;

    @Column({
        nullable: false
    })
    ipAddress: string;

    @Column({
        default: 0
    })
    parentComment: number;
}
