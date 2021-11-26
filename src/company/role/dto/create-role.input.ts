import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';
import { IsEmail, IsNotEmpty,IsOptional, Length, MaxLength } from 'class-validator';


@InputType()
export class CreateRoleInput {
  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the roll' })
  @IsNotEmpty()
  name : string;

  @Column()
  @Field(() => String, {description: "Description of the roll"})
  description : string;

  @Column()
  @Field(() => Boolean,{description: "roll is active or not"})
  isActive: boolean;

  @CreateDateColumn()
  createdOn: Date;

  @DeleteDateColumn()
  deletedAt: Date;

 

}
