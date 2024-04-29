import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configSwagger = new DocumentBuilder()
    .setTitle('Movies Catalog API')
    .setDescription(
      'The Movie Catalog API is a RESTful web service designed to provide comprehensive information about a wide range of movies. It allows developers to access details about movies such as title, genre, director, IMDb rating, release date, and more.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Auth')
    .addTag('Movies')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
