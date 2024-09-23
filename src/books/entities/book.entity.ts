import { IBook, Status } from '../interfaces/book.interface';

export class Book implements IBook {
  id = new Date().getTime();
  book: string;
  email: string;
  author: string;
  status: Status;
  tags: string[];
  createdAt: Date = new Date();
  updatedAt: Date = new Date();

  constructor(
    book: string,
    author: string,
    email?: string,
    status?: Status,
    tags?: string[]
  ) {
    this.book = book;
    this.author = author;
    this.status = status || Status.CREATED;
    this.tags = tags || [];
    this.email = email || null;
  }
}
