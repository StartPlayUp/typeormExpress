import { Thumb } from './Thumb';
import { IsEnum, IsIP, IsBoolean, MinLength, Length } from "class-validator";
import { Entity, Column, ManyToMany, ManyToOne, OneToMany, AfterInsert } from "typeorm";
import { Comment } from "./Comment";

import { Model } from './Models/Model'
import { User } from './User'

@Entity()
export class EmailVerify extends Model {
    @Column()
    email: string

    @Column()
    token: string
}
