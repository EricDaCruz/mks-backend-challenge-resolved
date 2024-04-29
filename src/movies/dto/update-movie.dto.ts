import { z } from 'zod';
import { createMovieSchema } from './create-movie.dto';
import { ApiProperty } from '@nestjs/swagger';

export const updateMovieSchema = createMovieSchema.partial();

export type UpdateMovieDto = z.infer<typeof updateMovieSchema>;

export class UpdateMovieDtoSwagger {
  @ApiProperty({
    description: 'O título do filme',
    example: 'O Poderoso Chefão',
    required: false,
  })
  title?: UpdateMovieDto['title'];

  @ApiProperty({
    description: 'O gênero do filme',
    example: 'Crime, Drama',
    required: false,
  })
  genre?: UpdateMovieDto['genre'];

  @ApiProperty({
    description: 'O diretor do filme',
    example: 'Francis Ford Coppola',
    required: false,
  })
  director?: UpdateMovieDto['director'];

  @ApiProperty({
    description: 'A classificação IMDb do filme',
    example: 9.2,
    required: false,
  })
  rating_imdb?: UpdateMovieDto['rating_imdb'];

  @ApiProperty({
    description: 'A URL da imagem do filme',
    example: 'https://exemplo.com/imagem.jpg',
    required: false,
  })
  image_url?: UpdateMovieDto['image_url'];

  @ApiProperty({
    description: 'A data de lançamento do filme',
    example: '2024-11-07',
    required: false,
  })
  release_date?: UpdateMovieDto['release_date'];
}
