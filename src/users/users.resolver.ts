import { Injectable, NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersArgs } from './dto/user.args';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  public async createUser(@Args('createUserInput') createUserInput: CreateUserInput):Promise<User> {
    return await this.usersService.create(createUserInput);
  }

  @Query(() => User)
  public async user(@Args('userId') userId: string): Promise<User> {
    const user = await this.usersService.findOneById(userId);
    if (!user) {
      throw new NotFoundException(userId);
    }
    return user;
  }

  @Query(() => [User], { name: 'inActiveUsers' })
  public async findAllInActiveUsers() {
    return this.usersService.findAllInActiveUsers();
  } 

  @Query(() => [User])
  public async users(@Args() usersArgs: UsersArgs): Promise<User[]> {
    return this.usersService.findAll(usersArgs);
  }

  @Query(() => User)
  findOne(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.findOne(userId);
  }

  @Mutation(() => User)
    public async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput): Promise<User> {
      return await this.usersService.update(updateUserInput.userId, updateUserInput);
    }

  @Mutation(() => User)
  public async deleteUser(@Args('userId') userId: string): Promise<any> {
    return this.usersService.delete(userId);
  }
}
