import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CacheModule.register(), MoviesModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
