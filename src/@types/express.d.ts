import { ClassConstructor } from 'class-transformer';

declare global {
  declare namespace Express {
    export interface Request {
      user: {
        id: string;
      };
    }

    export interface Response {
      custom: <T>(
        statusCode: number,
        view: ClassConstructor<T>,
        data: Array<object> | object,
      ) => Response<
        Array<object> | object,
        Record<string, Array<object> | object>
      >;
    }
  }
}
