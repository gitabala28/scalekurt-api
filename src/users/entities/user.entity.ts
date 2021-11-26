import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Unique,Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';

@Entity()
@ObjectType()

export class User {

    @PrimaryGeneratedColumn('uuid')
    @Field(() => String, { description: 'Id of the user' })
    userId: string;

    @Column()
    @Field(() => String, { description: 'Name of the user' })
    fullname : string;

    @Column()
    @Field(() => String, { description: 'Password of the user' })
    password : string;


    @Column()
    @Field(() => String, { description: 'Phone number of the user' })
    phone : string;

    @Column({ unique: true })
    @Field(() => String, { description: 'Email of the user' })

    email : string;
    
    @CreateDateColumn()
    @Field()
    createdOn: Date;

    @UpdateDateColumn()
    @Field()
    updatedOn: Date;

    @DeleteDateColumn()
    @Field({nullable:true})
    deletedAt: Date;
    

}
