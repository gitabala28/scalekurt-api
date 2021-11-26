import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Unique,Column, Entity, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,DeleteDateColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Company {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int, { description: 'Id of the company' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Full name of the company' })
  fullName : string;

  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the company' })
  companyName : string;

  @Column({ unique: true })
  @Field(()=>String,{ description: 'Company official ID'})
  officialId : string;


  @Column()
  @Field(()=>String,{description:'Password'})
  password : string;


  @Column()
  @Field(() => String, { description: 'Mobile number' })
  mobile : string;

  
  @Column()
  @Field(()=>Number,{description:'Organization Size'})
  organizationSize : number;

  @Column()
  @Field(()=>Number,{description: 'Organaization Type 0-compnay , 1- agency'})
  organaizationType:Number

  @Column()
  @Field(()=>String,{description:'Domain Name'})
  domainName:string
  
  
  @Column()
  @Field(()=>Number,{description:'Authorized to 0 - No ,1 - yes '})
  authorized_to:number


  @CreateDateColumn()
  @Field()
  createdOn: Date;

  @UpdateDateColumn()
  @Field()
  updatedOn: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;
}
