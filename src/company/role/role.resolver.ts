import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Resolver()
export class RoleResolver {

    constructor(private readonly roleService: RoleService) {}

    @Mutation(() => Role)
    public async createRole(@Args('createRoleInput') createRoleInput: CreateRoleInput): Promise<Role> {
      return await this.roleService.create(createRoleInput);
    }
  
    @Query(() => [Role], { name: 'role' })
    public async findAll() {
      return await this.roleService.findAll();
    } 
  
    @Mutation(() => Role)
    public async updateRole(@Args('updateRoleInput') updateRoleInput: UpdateRoleInput): Promise<Role> {
      return await this.roleService.update(updateRoleInput.id, updateRoleInput);
    }

    @Mutation(() => Role)
    public async deleteRole(@Args('id') id: number): Promise<any> {
      return this.roleService.delete(id);
    }
}
