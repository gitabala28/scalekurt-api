import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Not,IsNull} from 'typeorm';
import { User } from './entities/user.entity';
import { UsersArgs } from './dto/user.args';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

 
  async create(createUserInput: CreateUserInput):Promise<User> {

     // const saltOrRounds = 10;
     // const password = createUserInput.password;
     // const hash = await bcrypt.hash(password, saltOrRounds);
      createUserInput.password = bcrypt.hashSync(createUserInput.password, 8);
      //createUserInput.password = hash;
      const user = this.userRepository.create(createUserInput);
      return await this.userRepository.save(user);
  }

  public async findAll(usersArgs: UsersArgs): Promise<User[]> 
  {
    const { limit, offset } = usersArgs;
    return this.userRepository.find({
      skip: offset,
      take: limit,
    });
  }


  public async findOneById(userId: string): Promise<User> {
    const user = await this.userRepository.findOne(userId);

    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async update(
    userId: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    //updateUserInput.password = bcrypt.hashSync(updateUserInput.password, 8)
    const user = await this.userRepository.preload({
      userId: userId,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return this.userRepository.save(user);
  }


  findOne(userId: string) {
    return `This action returns a #${userId} user`;
  } 

  remove(userId: string) {
    return `This action removes a #${userId} user`;
  }

  async delete(userId: string): Promise<any> {
    const deleteResponse = await this.userRepository.softDelete(userId);
    if (!deleteResponse.affected) {
      throw new NotFoundException(userId);
    }
  }

  
  async findAllInActiveUsers(): Promise<Array<User>> {
    return await this.userRepository.find(
      {
       //withDeleted: true 
        deletedAt: Not(IsNull())
    }
     );
  }

}
