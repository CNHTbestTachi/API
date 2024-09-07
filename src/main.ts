// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = +process.env.APP_PORT || 3000
  app.setGlobalPrefix('api')

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API')
    .setDescription('API documentation')
    .setVersion('1.0')
    // .addTag('Todo')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  Logger.log(`Port running on: ${port}`)
  Logger.log(`Swagger running on: http://localhost:${port}/api#/`)

  await app.listen(port);
}
bootstrap();