import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthResponse } from 'src/movies/dto/swagger-docs';
@ApiTags('Auth')
@Controller('auth')
@ApiResponse({
  status: 401,
  description: 'Invalid username or password.',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiResponse({
    status: 200,
    description: 'User logged.',
    type: AuthResponse,
  })
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
