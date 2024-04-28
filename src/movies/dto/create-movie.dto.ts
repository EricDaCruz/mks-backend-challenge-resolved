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
