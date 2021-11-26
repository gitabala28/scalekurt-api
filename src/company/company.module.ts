import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyResolver } from './company.resolver';
import { RoleService } from './role/role.service';
import { RoleResolver } from './role/role.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './role/entities/role.entity';
import { Company } from './entities/company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role]),TypeOrmModule.forFeature([Company])],
  providers: [CompanyResolver, CompanyService, RoleService, RoleResolver]
})
export class CompanyModule {}
