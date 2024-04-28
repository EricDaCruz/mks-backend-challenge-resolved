import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get('username')
  async getUserByUsername(username: string) {
    await this.userService.findOne(username);
  }
}
