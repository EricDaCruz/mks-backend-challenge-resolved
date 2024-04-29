import { ApiProperty } from '@nestjs/swagger';
import { z } from 'zod';

export const createMovieSchema = z
  .object({
    title: z.string(),
    genre: z.string(),
    director: z.string(),
    rating_imdb: z.number(),
    image_url: z.string(),
    release_date: z.coerce.date(),
  })
  .required();

export type CreateMovieDto = z.infer<typeof createMovieSchema>;

export class CreateMovieDtoSwagger {
  @ApiProperty({
    description: 'O título do filme',
    example: 'O Poderoso Chefão',
  })
  title: CreateMovieDto['title'];

  @ApiProperty({ description: 'O gênero do filme', example: 'Crime, Drama' })
  genre: CreateMovieDto['genre'];

  @ApiProperty({
    description: 'O diretor do filme',
    example: 'Francis Ford Coppola',
  })
  director: CreateMovieDto['director'];

  @ApiProperty({ description: 'A classificação IMDb do filme', example: 9.2 })
  rating_imdb: CreateMovieDto['rating_imdb'];

  @ApiProperty({
    description: 'A URL da imagem do filme',
    example: 'https://exemplo.com/imagem.jpg',
  })
  image_url: CreateMovieDto['image_url'];

  @ApiProperty({
    description: 'A data de lançamento do filme',
    example: '2024-11-07',
  })
  release_date: CreateMovieDto['release_date'];
}
