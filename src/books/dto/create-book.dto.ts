// create-book.dto.ts
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  ArrayNotEmpty,
} from 'class-validator';
import { Status } from '../interfaces/book.interface';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Название книги не может быть пустым' })
  book: string;

  @IsString()
  @IsNotEmpty({ message: 'Автор не может быть пустым' })
  author: string;

  @IsOptional()
  @IsEmail({}, { message: 'Некорректный адрес электронной почты' })
  email: string;

  @IsOptional()
  @IsEnum(Status, { message: 'Недопустимый статус' })
  status: Status;

  @IsOptional()
  @IsArray({ message: 'Теги должны быть массивом' })
  @ArrayNotEmpty({ message: 'Массив тегов не может быть пустым' })
  @IsString({ each: true, message: 'Каждый тег должен быть строкой' })
  tags: string[];
}
