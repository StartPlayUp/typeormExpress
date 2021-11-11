import { Entity, Column, ManyToOne } from "typeorm";
import { Model } from "./Models/Model";

@Entity()
export class Notification extends Model {
    @Column()
    content!: string;

    @Column('boolean', { default: false })
    deleted!: boolean;
}