import { Injectable,NotFoundException  } from '@nestjs/common';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {

    constructor(
        @InjectRepository(Role)
        private roleRepository: Repository<Role>,
      ) {}

      
  async create(createRollInput: CreateRoleInput): Promise<Role> {
    const role = this.roleRepository.create(createRollInput);
    return await this.roleRepository.save(role);
  }
  async findAll(): Promise<Array<Role>> {
    return await this.roleRepository.find();
  }

  async update(
    id: number,
    updateRoleInput: UpdateRoleInput,
  ): Promise<Role> {
    const role = await this.roleRepository.preload({
      id: id,
      ...updateRoleInput,
    });
    if (!role) {
      throw new NotFoundException(`Role #${id} not found`);
    }
    return this.roleRepository.save(role);
  }

  async delete(id: number): Promise<void> {
    const deleteResponse = await this.roleRepository.softDelete(id);
    if (!deleteResponse.affected) {
      throw new NotFoundException(id);
    }
  }

}
