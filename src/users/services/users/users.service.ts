import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      userName: 'John Doe',
      email: 'john.doe@gmail.com',
    },
    {
      id: 2,
      userName: 'Marc Sunday',
      email: 'marc.sunday@gmail.com',
    },
  ];
  fetchUsers() {
    return this.users;
  }

  fetchUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(userData: CreateUserDto) {
    this.users.push({ id: this.users.length + 1, ...userData });
    return userData;
  }
}
