import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  title?: string;
  director?: string;
  genre?: string;
  image_url?: string;
  rating_imdb?: string;
  release_date?: Date;
}
