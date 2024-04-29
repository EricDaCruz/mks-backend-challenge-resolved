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
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import {
  CreateMovieDto,
  CreateMovieDtoSwagger,
  createMovieSchema,
} from './dto/create-movie.dto';
import {
  UpdateMovieDto,
  UpdateMovieDtoSwagger,
  updateMovieSchema,
} from './dto/update-movie.dto';
import { ZodValidationPipe } from './helpers/validation/ZodValidationPipe';
import { AuthGuard } from 'src/auth/auth.guard';
import {
  ApiBearerAuth,
  ApiBody,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { MovieResponse, MovieSwagger } from './dto/swagger-docs';
import { CacheTTL } from '@nestjs/cache-manager';

@ApiTags('Movies')
@UseGuards(AuthGuard)
@ApiBearerAuth()
@ApiResponse({
  status: 401,
  description: 'Unauthorized.',
})
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  @ApiBody({ type: CreateMovieDtoSwagger })
  @ApiResponse({
    status: 201,
    description: 'The movie has been successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Fields not filled or with wrong types.',
  })
  @UsePipes(new ZodValidationPipe(createMovieSchema))
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  @CacheTTL(30)
  @ApiResponse({
    status: 200,
    description: 'Get All Movies.',
    type: MovieResponse,
  })
  async findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'UUID' })
  @ApiResponse({
    status: 200,
    description: 'Get movie by id.',
    type: MovieSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Movie not found or ID Invalid.',
  })
  async findMovieByID(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.moviesService.findOneByID(id);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'UUID' })
  @ApiBody({ type: UpdateMovieDtoSwagger })
  @ApiResponse({
    status: 200,
    description: 'Movie updated',
  })
  @ApiResponse({
    status: 400,
    description: 'UUID is expected.',
  })
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body(new ZodValidationPipe(updateMovieSchema))
    updateMovieDto: UpdateMovieDto,
  ) {
    this.moviesService.update(id, updateMovieDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Movie deleted.',
  })
  @ApiResponse({
    status: 400,
    description: 'UUID is expected.',
  })
  @ApiParam({ name: 'id', description: 'UUID' })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.moviesService.remove(id);
  }
}
