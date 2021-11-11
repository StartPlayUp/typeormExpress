import { Column } from "typeorm";
import { Model } from "./Model";


export abstract class CommentModel extends Model {
    @Column({
        nullable: false
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

    @Column({
        default: 0
    })
    parentPost: number;

    constructor(model?: Partial<any>) {
        super()
        Object.assign(this, model)
    }
}
