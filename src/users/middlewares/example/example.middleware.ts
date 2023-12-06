import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    if (authorization !== '123456')
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    next();
  }
}
