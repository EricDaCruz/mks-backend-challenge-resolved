import { ApiProperty } from '@nestjs/swagger';
import { CreateMovieDtoSwagger } from './create-movie.dto';

export class MovieSwagger extends CreateMovieDtoSwagger {
  @ApiProperty({ description: 'O título do filme' })
  id: string;

  @ApiProperty({ description: 'A data de lançamento do filme' })
  created_at: Date;

  @ApiProperty({ description: 'A data de lançamento do filme' })
  updated_at: Date;
}
export class MovieResponse {
  @ApiProperty({ description: 'Os dados da resposta', type: [MovieSwagger] })
  movies: MovieSwagger[];
}

export class AuthResponse {
  @ApiProperty({ description: 'O token de autenticação' })
  access_token: string;
}
