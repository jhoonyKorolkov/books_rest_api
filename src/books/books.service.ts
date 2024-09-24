import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { IBook } from './interfaces/book.interface';
import { Book } from './entities/book.entity';
import { NotFoundBookException } from './exceptions/not-found-book.exception';

@Injectable()
export class BooksService {
  private books: IBook[] = [];

  create({ book, author, email, status, tags }: CreateBookDto): IBook {
    const newBook = new Book(book, author, email, status, tags);
    this.books.push(newBook);
    return newBook;
  }

  findAll(): IBook[] {
    return this.books;
  }

  findOne(id: number): IBook {
    const book = this.books.find(b => b.id == id);
    console.log(book);

    if (!book) {
      // throw new HttpException('not fond', HttpStatus.NOT_FOUND);
      // throw new NotFoundException({
      //   message: 'книга не найдена',
      //   error: 'dfd',
      //   error_code: '212',
      // });
      throw new NotFoundBookException({ code: 'der' });
    }
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  findByEmail(email: string): IBook[] {
    return this.books.filter(b => b.email === email);
  }
}
