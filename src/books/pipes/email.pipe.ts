import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isEmail } from 'class-validator';

@Injectable()
export class EmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!isEmail(value)) {
      throw new BadRequestException('Не вреный email');
    }
    return value;
  }
}
