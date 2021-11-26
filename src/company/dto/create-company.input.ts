import { InputType, Int, Field } from '@nestjs/graphql';
import { Unique,Column, Entity } from 'typeorm';
import { IsEmail, MinLength,IsNotEmpty,IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateCompanyInput {
 

  @Column()
  @Field(() => String, { description: 'Full name of the company' })
  @IsNotEmpty()
  fullName : string;

  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the company' })
  @IsNotEmpty()
  companyName : string;

  @Column({ unique: true })
  @Field(()=>String,{ description: 'Company official ID'})
  @IsNotEmpty()
  officialId : string;

  @Column()
  @Field(()=>String,{description:'Password'})
  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(8, { message: " The min length of password is 8 " })
  @MaxLength(20, { message: " The password can't accept more than 20 characters " })
  password : string;


  @Column()
  @IsNotEmpty({ message: 'Mobile number is required' })
  @Field(() => String, { description: 'Mobile number' })
  @IsNotEmpty()
  mobile : string;

  
  @Column()
  @Field(()=>Number,{description:'Organization Size'})
  @IsNotEmpty()
  organizationSize : number;

  @Column()
  @Field(()=>Number,{description: 'Organaization Type 0-compnay , 1- agency'})
  organaizationType:number

  @Column()
  @Field(()=>String,{description:'Domain Name'})
  @IsNotEmpty()
  domainName:string
  
  
  @Column()
  @Field(()=>Number,{description:'Authorized to 0 - No ,1 - yes '})
  authorized_to:number

}
