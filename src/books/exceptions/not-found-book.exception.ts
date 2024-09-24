/*
https://docs.nestjs.com/exception-filters#custom-exceptions
*/

import { HttpException, HttpStatus } from '@nestjs/common';
import { Error } from '../interfaces/error.interface';

export class NotFoundBookException extends HttpException {
  constructor(code: Error = null) {
    super(
      {
        message: 'книга не найдена',
        error_code: 'not_found_book_exception',
        createdAt: new Date().toISOString(),
        ...code,
      },
      HttpStatus.NOT_FOUND
    );
  }
}
