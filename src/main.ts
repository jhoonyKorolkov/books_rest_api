// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './books/exceptions/exception.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // Удаляем или закомментируем следующую строку
      // validationError: { target: false, value: false },
    })
  );
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(4200);
}
bootstrap();
