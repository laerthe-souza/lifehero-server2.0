import { NextFunction, Request, Response } from 'express';

import { logger } from '../utils/logger';
import { AppError } from './AppError';

export function getErrors(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  logger.error(error);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
