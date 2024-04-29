import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MoviesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
