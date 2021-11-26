import { ObjectType,InputType, Int, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';
import { IsMobilePhone,IsEmail, IsNotEmpty,IsOptional, Length, MaxLength,MinLength } from 'class-validator';


@InputType()

export class CreateUserInput {

  @Column()
  @Field(() => String, { description: 'Name of the user' })
  @IsNotEmpty({ message: 'Name is required' })
  fullname : string;

  @Column()
  @Field(() => String, { description: 'Password of the user' })
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: " The min length of password is 8 " })
  @MaxLength(20, { message: " The password can't accept more than 20 characters " })
  password : string;


  @Column()
  @Field(() => String, { description: 'Phone number of the user' })
  //@IsMobilePhone({message: 'Incorrect phone number'})
  phone : string;

  @Column({ unique: true })
  @Field(() => String, { description: 'Email of the user' })
  @IsNotEmpty({ message: 'The email is required' })
  @IsEmail({message: 'Incorrect email'})
  email : string; 

    

}
