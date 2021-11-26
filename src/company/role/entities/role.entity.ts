import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';

/*export enum IsRoleActive {
    YES="1",
    NO="0"
} */

@Entity()
@ObjectType()
export class Role {
   
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int, { description: 'Id of the role' })
    id: number;

    @Column()
    @Field(() => String, { description: 'Name of the roll' })
    name : string;

    @Column()
    @Field(() => String, {description: "Description of the roll"})
    description : string;

   /* @Column({
        type: "enum",
        enum: IsRoleActive,
        default: IsRoleActive.YES
    })
    @Field(() => IsRoleActive,{description:"role is active or not"})
    isActive : IsRoleActive; */
 
    @Column()
    @Field(() => Boolean,{description: "roll is active or not"})
    isActive: boolean;

    @CreateDateColumn()
    createdOn: Date;

    @UpdateDateColumn()
    updatedOn: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}
