import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 'dc0a1686-6017-4102-b5ed-d99f09cbf13f',
      name: 'John Doe',
      username: 'john',
      password: 'changeme',
    },
    {
      id: '631d5618-b77f-4346-9044-4c4c036cec71',
      name: 'Maria Smith',
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
