// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './books/exceptions/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');

  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(4200);
}
bootstrap();
