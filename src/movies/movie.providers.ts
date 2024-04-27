import { DataSource } from 'typeorm';
import { Movie } from './entities/movie.entity';

export const movieProviders = [
  {
    provide: 'MOVIE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Movie),
    inject: ['DATA_SOURCE'],
  },
];
