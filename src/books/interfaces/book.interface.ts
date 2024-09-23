export enum Status {
  READED = 'readed',
  CREATED = 'created',
  ERROR = 'error',
}

export interface IBook {
  id: number;
  book: string;
  email: string;
  author: string;
  status: Status;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}
