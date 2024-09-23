import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseFilters,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { IBook } from './interfaces/book.interface';
import { EmailPipe } from './pipes/email.pipe';

@Controller('book')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() book: CreateBookDto): IBook {
    return this.booksService.create(book);
  }

  @Get()
  findAll(): IBook[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): IBook {
    return this.booksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }

  @Get('email/:email')
  findByEmail(@Param('email', EmailPipe) email: string): IBook[] {
    return this.booksService.findByEmail(email);
  }
}
