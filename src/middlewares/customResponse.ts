import { NextFunction, Request, Response } from 'express';
import { ClassConstructor, plainToClass } from 'class-transformer';

export function customResponse(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  Object.assign(response, {
    custom: <T>(
      statusCode: number,
      view: ClassConstructor<T>,
      data: Array<object> | object,
    ) => {
      return response.status(statusCode).json(plainToClass(view, data));
    },
  });

  next();
}
