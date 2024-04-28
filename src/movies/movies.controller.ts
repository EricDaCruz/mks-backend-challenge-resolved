import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseUUIDPipe,
  UsePipes,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto, createMovieSchema } from './dto/create-movie.dto';
import { UpdateMovieDto, updateMovieSchema } from './dto/update-movie.dto';
import { ZodValidationPipe } from './helpers/validation/ZodValidationPipe';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createMovieSchema))
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async findMovieByID(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.moviesService.findOneByID(id);
  }

  @Put(':id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(new ZodValidationPipe(updateMovieSchema))
    updateMovieDto: UpdateMovieDto,
  ) {
    this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.moviesService.remove(id);
  }
}
