import { Injectable, NotFoundException  } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { Company } from './entities/company.entity';
import {Repository} from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private companyRespository: Repository<Company>,
  ) {}

  async create(createCompanyInput: CreateCompanyInput):Promise<Company> {
   
    const saltRounds = 8;
    const salt = bcrypt.genSaltSync(saltRounds);
    createCompanyInput.password = bcrypt.hashSync(createCompanyInput.password, salt);
    const company = this.companyRespository.create(createCompanyInput);
    return await this.companyRespository.save(company);
    
  }



  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyInput: UpdateCompanyInput) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
