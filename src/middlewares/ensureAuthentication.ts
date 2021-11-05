import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { jwtConfig } from '../configs/jwt';

type IPayload = {
  subject: string;
};

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
): Response | void {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ message: 'Token not provided' });
  }

  const [schema, token] = authorization.split(' ');

  if (!/^Bearer$/i.test(schema)) {
    return response.status(401).json({ message: 'Token malformatted' });
  }

  try {
    const { subject } = verify(token, jwtConfig.secret) as IPayload;

    request.user.id = subject;

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Token invalid' });
  }
}
